import './App.css'
import Products from './components/Products'
import { products as allProducts } from './mocks/products.json'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart.jsx'
import useFilters from './hooks/useFilters.jsx'
import { CartProvider } from './context/cart.jsx'




function App() {

  const { filterProducts } = useFilters()
  const filterdProducts = filterProducts(allProducts)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filterdProducts} />
        <Footer />
      </CartProvider>

    </>
  )
}

export default App
