import { useEffect, useRef, useState, useMemo } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])
  const [filasColor, setFilasColor] = useState(false)
  const [orderByCountry, setOrderByCountry] = useState(false)
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

  function sortUsersByCountry(usuarios) {
    if (orderByCountry) {
      return [...usuarios].sort((a, b) => a.location.country.localeCompare(b.location.country))
    }
    else return usuarios
  }

  //filtro por en base al estado y lo mando a una const
  const filteredUsers = useMemo(() => filterCountry !== null && filterCountry.length > 0 ?
    [...users].filter(user => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
    : users
    , [users, filterCountry])

  // si toca ordeno los usuarios filtrados por pais, uso se memo para no gastar recusos
  // reordenado cada vez que camibia oreo estado independien com coloerear filas o el filtro por pais
  const sortedUsers = useMemo(() => {
    if (orderByCountry) {
      return [...filteredUsers].sort((a, b) => a.location.country.localeCompare(
        b.location.country))
    }
    else return filteredUsers
  }
    , [filteredUsers, orderByCountry]);



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
          onClick={() => setOrderByCountry(prevOrdr => !prevOrdr)}
          style={{ width: '150px' }}
        >
          {orderByCountry ? 'No ordenar por pais' : 'Ordenar por Pais'}
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
        />
      </main>
    </>
  )
}

export default App
