import {useId, useContext } from 'react'
import './filters.css'
import { FiltersContext } from '../context/filters'

export default function Filters() {

    const minPrecieFilterId = useId()
    const categoryFilterId = useId()
    
    const { filters, setFilters } = useContext(FiltersContext)

    function handleChangeMinPrice(e) {
        setFilters(prevFilters => ({
            ...prevFilters,
            minPrice: e.target.value
        }))
    }


    function handleCategory (e) {
        setFilters((prevFilters)=> ({...prevFilters, category: e.target.value}))
    }


    return (
        <div className="filters">

            <div>
                <label htmlFor={minPrecieFilterId}>Precio Desde </label>
                <input type="range"
                    id={minPrecieFilterId}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}> Categoria</label>
                <select id={categoryFilterId} onChange={handleCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </div>
    )
}