import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])

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

  return (
    <>
      <h1>Users Table</h1>
      <Table users={users}/>
    </>
  )
}

export default App
