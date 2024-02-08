import { createContext, useReducer } from 'react';

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {   // El state que reciba va ser el carrito

    const { type: actionType, payload: actionPayLoad } = action
    switch (actionType) {

        case 'ADD_to_CART': {
            const productInCartIndex = state.findIndex(item => item.id === actionPayLoad.id)

            if (productInCartIndex >= 0) { // si ya esta en carrito el indice es mayor o igual 0
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [...state, { ...actionPayLoad, quantity: 1 }]  // Si no esta en carrito lo agrega
        }

        case 'REMOVE_FROM_CART': {
            return state.filter(item => item.id !== actionPayLoad.id)
        }

        case 'CLEAN_CART': {
            return initialState
        }
    }
    return state
}


export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCArt = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const RemoveFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAN_CART'
    })


    return (
        <CartContext.Provider value={{ cart: state, addToCArt, RemoveFromCart , clearCart }} >
            {children}
        </CartContext.Provider>
    )
}

