import './Products.css'
import {AddToCartIcon} from './Icons'
import { useCart } from '../hooks/useCart'


export default function Products ({products}){
    const { cart, addToCArt} = useCart()
    
    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong>
                        </div>
                        <div>
                            <button onClick={() => addToCArt(product)}> <AddToCartIcon/> </button>
                        </div>
                    </li>
                )

                )}
            </ul>
        </main>
    )
     
}

