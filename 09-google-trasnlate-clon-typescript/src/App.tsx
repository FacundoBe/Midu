import { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// 1 create initial state
const initial_state = {
  fromLaguage: 'auto',
  toLanguage: 'en',
  fromTexto: '',
  result: '',
  loading: false
}

// 2 create reducer
function reducer (state, action) {
const { type } = action
}


function App() {
  // usar el useReducer
  const [state, dispatch] = useReducer(reducer, initial_state)
  return (
    <>
      <h1>Translator clon</h1>
    </>
  )
}

export default App
