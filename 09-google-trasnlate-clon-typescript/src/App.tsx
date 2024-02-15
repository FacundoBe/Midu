import { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { type Action, type State } from './types'

// 1 create initial state
const initial_state: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// 2 create reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGUES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      fromText: action.payload,
      loading: true,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state //si el type no coincide con las acciones programadas, devuelve el estado sin modificar
}


function App() {
  // usar el useReducer
  const [state, dispatch] = useReducer(reducer, initial_state)

  return (
    <>
      <h1>Translator clon </h1>
      <button onClick={() => dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'ingles' })}>
        Cambiar From language
      </button>
      <h2>{state.fromLanguage}</h2>
    </>
  )
}

export default App
