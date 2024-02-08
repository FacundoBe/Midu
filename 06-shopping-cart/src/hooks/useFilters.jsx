import { FiltersContext } from '../context/filters.jsx'
import { useContext } from 'react'


export default function useFilters() {

    const { filters } = useContext(FiltersContext)
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === 'all' || filters.category === product.category)
        )
      })
    }
  
    return { filterProducts}
  }