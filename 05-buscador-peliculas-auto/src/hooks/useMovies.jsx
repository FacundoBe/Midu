import { useEffect, useState, useMemo } from 'react'

const API_KEY = "fd161998"

export default function useMovies({ validSearch, sort }) {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        if (validSearch !== "") {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${validSearch}`)
                .then(res => res.json())
                .then(data => {
                    if (data.Response === "True") {
                        setMovieList(data.Search)
                    } else { setMovieList([]) }
                })
        }
    }
        , [validSearch])
    // Mapeo las keys del Json a valores que yo elijo, de forma que los componentes que los usen no dependan
    const mapedMoviesList = movieList?.map(movie => ({  //  de la sintaxis particular de la API
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const sortedMovieList = useMemo(() => {

        return sort ?
            [...mapedMoviesList].sort((a, b) => a.year.localeCompare(b.year,{numeric: true}))
            : mapedMoviesList
    }
    ,[sort,movieList])

    return sortedMovieList


}