import { useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { type Action, type State } from './types'
import { Container, Row, Col, Form, Stack } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { ArrowsIcons } from './components/icons'
import FromLanguageSelector from './components/FromLanguageSelector'
import ToLanguageSelector from './components/ToLaguaguageSelector'
import TextArea from './components/TextArea'
//Reducer
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
    if (state.fromLanguage === 'auto') return state //auto no debe poder intercambiarse a lenguaje de salida

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (action.payload === state.toLanguage) {
      return {  //si quiero elegir el de entrada igual al que esta de salida, me cambia el de salida para que no queden iguales
        ...state,
        toLanguage: 'sel',
        fromLanguage: action.payload
      }
    }
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (action.payload === state.fromLanguage) return state

    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    const loadingST = action.payload === '' ? false : true // si se vacia la entrada no sale loading
    return {
      ...state,
      fromText: action.payload,
      loading: loadingST,
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

  useEffect(() => {    // Useffect con debouncer 
    const callApi = setTimeout(() => {
      dispatch({ type: 'SET_RESULT', payload: `Proximamente tradución de: "${state.fromText}"` })
    }, 1000)
    return () => clearTimeout(callApi)
  }
    , [state.fromText])


  return (
    <>
      <Container fluid>
        <h1>Translator clon </h1>
        <Row>
          <Col>
            <Stack gap={2}>
              <FromLanguageSelector dispatch={dispatch} state={state} />
              <TextArea
                type='from'
                loading={state.loading}
                value={state.fromText}
                dispatch={dispatch}
              />
            </Stack>
          </Col>

          <Col xs='auto'>
            <Button variant='link' disabled={state.fromLanguage === 'auto'}
              onClick={() => dispatch({ type: 'INTERCHANGE_LANGUAGUES' })}><ArrowsIcons />
            </Button>
          </Col>

          <Col>
            <Stack gap={2}>
              <ToLanguageSelector dispatch={dispatch} state={state} />
              <TextArea
                type='to'
                loading={state.loading}
                value={state.result}
                dispatch={dispatch}
              />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
