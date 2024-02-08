import { useContext } from 'react'
import './Footer.css'
import {FiltersContext } from '../context/filters'
import { useCart } from '../hooks/useCart'

export default function Footer() {

  const { filters } = useContext(FiltersContext)
  const {cart} = useCart()
  
  return (
    <>
      <footer className='footer'>
        {/* <h4>{JSON.stringify(cart)}</h4> */}
        {/* <h2>{JSON.stringify(filters)}</h2> */}
        <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5>
      </footer>
    </>
  )
}
