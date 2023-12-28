
import { useEffect, useState } from 'react'

const API_KEY = "fd161998"

export default function useMovies(search) {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        if (search !== "") {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
                .then(res => res.json())
                .then(data => {
                    if (data.Response === "True") {
                        setMovieList(data.Search)
                    } else { setMovieList([]) }
                })
        }
    }
        , [search])
    // Mapeo las keys del Json a valores que yo elijo, de forma que los componentes que los usen no dependan
    const mapedMoviesList = movieList?.map(movie => ({  //  de la sintaxis particular de la API
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))
    return mapedMoviesList


}