import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])
  const [filasColor, setFilasColor] = useState(false)

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.status)
      })
      .then(userData => setUsers(userData.results))
      .catch(err => console.log(err))
  }
    , [])

  function handleDelete(uuid) {
    setUsers(prevUsers => prevUsers.filter(user => user.login.uuid !== uuid))
  }

  return (
    <>
      <h1>Lista de Usuarios</h1>
      <div>
        <button onClick={() => setFilasColor(prevCol => !prevCol)}> Colorea filas </button>
      </div>
      <Table users={users}
        handleDelete={handleDelete}
        filasColor={filasColor}
      />
    </>
  )
}

export default App
