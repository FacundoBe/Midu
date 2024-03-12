import { useEffect, useRef, useState, useMemo } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])
  const [filasColor, setFilasColor] = useState(false)
  const [orderBy, setOrderBy] = useState('')
  const [filterCountry, setFilterCountry] = useState("")
  const originalUsers = useRef([])


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.status)
      })
      .then(userData => {
        setUsers(userData.results)
        originalUsers.current = userData.results
      })
      .catch(err => console.log(err))
  }
    , [])


  function handleDelete(uuid) {
    setUsers(prevUsers => prevUsers.filter(user => user.login.uuid !== uuid))
  }

  function handleFilterCountry(e) {
    setFilterCountry(e.target.value)
  }

  function handleOrderByCountry (){ 
    setOrderBy(prevOrderBy => (prevOrderBy === 'country' ? '': 'country' ))
  }

  //filtro por en base al estado y lo mando a una const
  const filteredUsers = useMemo(() => filterCountry !== null && filterCountry.length > 0 ?
    [...users].filter(user => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
    : users
    , [users, filterCountry])

  // si toca ordeno los usuarios filtrados por pais o  por la columan elegida, uso se memo para no gastar recusos
  // reordenado cada vez que camibia oreo estado independien com coloerear filas o el filtro por pais
  const sortedUsers = useMemo(() => {
    if (orderBy==='country') {
      return [...filteredUsers].sort((a, b) => a.location.country.localeCompare(
        b.location.country))
    }
    if (orderBy==='nombre') {
      return [...filteredUsers].sort((a, b) => a.name.first.localeCompare(
        b.name.first))
    }
    if (orderBy==='apellido') {
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
          {orderBy==='country'  ? 'No ordenar por pais' : 'Ordenar por Pais'}
        </button>
        <button onClick={() => setUsers(originalUsers.current)}>
          Restaurar estado inicial
        </button>
        <input placeholder='Filtro por pais'
          size={10}
          type="text"
          onChange={handleFilterCountry}
          value={filterCountry}
        />
      </header>
      <main>
        <Table users={sortedUsers}
          handleDelete={handleDelete}
          filasColor={filasColor}
          setOrderBy={setOrderBy}
        />
      </main>
    </>
  )
}

export default App
