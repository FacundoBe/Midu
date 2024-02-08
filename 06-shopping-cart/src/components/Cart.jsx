import { useId } from 'react'
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem({ thumbnail, title, quantity, addToCart }) {
    return (
        <li>
            <img src={thumbnail} alt="" />
            <div>
                <strong>{title}</strong>
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export default function Cart() {
    const cartCheckboxId = useId()
    const { cart, addToCArt, clearCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            {<aside className='cart'>
                <ul>
                    { cart.map(item => <CartItem
                    key={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    quantity={item.quantity}
                    addToCart={() => addToCArt(item)}
                    />
                    )}
                </ul>

                {cart.length > 0  &&<button onClick={clearCart}>
                    <ClearCartIcon />
                </button>}
            </aside >
            }

        </>
    )
}