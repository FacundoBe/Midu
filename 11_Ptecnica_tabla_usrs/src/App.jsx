import { useEffect, useRef, useState, useMemo } from 'react'
import './App.css'
import Table from './components/Table'
import { useIntersectionObserver } from 'usehooks-ts'


function App() {
  const [users, setUsers] = useState([])
  const [filasColor, setFilasColor] = useState(false)
  const [orderBy, setOrderBy] = useState('')
  const [filterCountry, setFilterCountry] = useState("")
  const originalUsers = useRef([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrenrPage] = useState(1)
  const [scrollType, setScrollType] = useState('boton')

  const { isIntersecting, ref } = useIntersectionObserver({}) //para saber cuando el div al final
  // de la tabla es visible y ahi cargar mas datos

  console.log(isIntersecting)

  async function fetchUsers() {
    return await fetch(`https://randomuser.me/api/?results=10&seed=midudev&page=${currentPage}`)
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.status)
      }).then(data => data.results)
  }

  useEffect(() => {
    setLoading(true) // Indico que comienza a cargar datos justo antes del fetch
    setError(null) // Reseteo el error para esta vuelta de fetch
    fetchUsers(currentPage)
      .then(userData => {
        setUsers(prevUsers => {
          const newUsers = [...prevUsers, ...userData]
          originalUsers.current = newUsers
          return newUsers
        })

      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
      .finally(() => setLoading(false))
  }
    , [currentPage])


  useEffect(() => {  // activa el infinity scroll si el div al final de la tabla esta a la vista
    if (users.length > 0 && isIntersecting && scrollType === 'infi') {
      setCurrenrPage(prevPge => prevPge + 1)
    }
  }, [isIntersecting, scrollType])

  function handleScrollType () {
    setScrollType(prevType => prevType === 'boton' ? 'infi' : 'boton')
  }

  function handleDelete(uuid) {
    setUsers(prevUsers => prevUsers.filter(user => user.login.uuid !== uuid))
  }

  function handleFilterCountry(e) {
    setFilterCountry(e.target.value)
  }

  function handleOrderByCountry() {
    setOrderBy(prevOrderBy => (prevOrderBy === 'country' ? '' : 'country'))
  }

  //filtro por en base al estado y lo mando a una const
  const filteredUsers = useMemo(() => filterCountry !== null && filterCountry.length > 0 ?
    [...users].filter(user => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
    : users
    , [users, filterCountry])

  // si toca ordeno los usuarios filtrados por pais o por la columan elegida, uso se memo para no gastar recusos
  // reordenado cada vez que camibia oreo estado independien com coloerear filas o el filtro por pais
  const sortedUsers = useMemo(() => {
    if (orderBy === 'country') {
      return [...filteredUsers].sort((a, b) => a.location.country.localeCompare(
        b.location.country))
    }
    if (orderBy === 'nombre') {
      return [...filteredUsers].sort((a, b) => a.name.first.localeCompare(
        b.name.first))
    }
    if (orderBy === 'apellido') {
      return [...filteredUsers].sort((a, b) => a.name.last.localeCompare(
        b.name.last))
    }
    else return filteredUsers
  }
    , [filteredUsers, orderBy]);



  return (
    <>
      <h1>Lista de Usuarios</h1>
      <header>
        <div className='main-header'>
          <button
            className={filasColor ? 'button-selected' : ""}
            onClick={() => setFilasColor(prevCol => !prevCol)}
          >
            Colorea filas
          </button>
          <button
            onClick={handleOrderByCountry}
            style={{ width: '150px' }}
          >
            {orderBy === 'country' ? 'No ordenar por pais' : 'Ordenar por Pais'}
          </button>
          <button onClick={() => setUsers(originalUsers.current)}>
            Restaurar estado inicial
          </button>
          <div className='filter-div'>
            <input placeholder='Filtro por pais'
              size={10}
              type="text"
              onChange={handleFilterCountry}
              value={filterCountry}
            />
            <button className='clear-filter' onClick={() => setFilterCountry('')}>x</button>
          </div>
        </div>
        <button onClick={handleScrollType}>
          Scroll: {scrollType === 'infi' ? 'infinity' : 'Con boton'}
        </button>
      </header>
      <main>

        {users.length > 0 && <Table users={sortedUsers}
          handleDelete={handleDelete} filasColor={filasColor}
          setOrderBy={setOrderBy} orderBy={orderBy} loading={loading}
        />}
        {loading && <p> Cargando </p>}

        {!loading && error && users.length === 0 && <p>Se produjo un error al cargar los datos </p>}

        {!loading && !error && scrollType === 'boton' && <button onClick={() => setCurrenrPage(prevCurrPage => prevCurrPage + 1)}>
          Cargar mas resultados
        </button>}

        <div ref={ref}></div>

      </main>
    </>
  )
}

export default App
