
import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

export default function useSearch({ setValidSearch }) {
    const [search, setSearch] = useState("")
    const [err, setErr] = useState()
    let isFirstInput = useRef(true)
    
    // Funcion que actualiza el estado
    const debouncedValidSearch = useCallback(debounce((search) => setValidSearch(search), 500), [setValidSearch])

    useEffect(() => {

        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }

        if (search === "") {
            setErr("Ingrese una Pelicula")
            return
        }
        if (search.length < 3) {
            setErr("Ingrese al menos 3 caracteres ")
            return
        }
        setErr(null)
        debouncedValidSearch(search) // si llego hast aqui esta validada
    }                                // Actualizo el estado con debounce ver definicion de la funcion arriba    
        , [search])

    return { search, setSearch, err }  //search lo mando para controlar el input, 
    //validSearch para que se realize el fetch de peliculas
}