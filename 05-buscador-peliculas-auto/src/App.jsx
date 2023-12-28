import { useRef, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'


// https://www.omdbapi.com/?apikey=fd161998&s=pirates+of


function App() {

  const [search, setSearch] = useState("")
  const[err, setErr]  = useState()
  const movieList = useMovies(search)
  

  function handleChange (e) {
    const newSearch=e.target.value
    setSearch(newSearch)

    if (newSearch === ""){
      setErr("Ingrese la Pelicula") 
      return
    }
    if (newSearch.length < 3){
      setErr("Ingrese la menos 3 caracteres ")
    }
  }

  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header >
        <form >
          <input value={search} onChange={handleChange} name="movieInput" placeholder='Movie Name' type="text" />
        </form>
      </header>
      <main>
        { err && <h2 style={{color:'red' }} >{err}{search}</h2>  }
        
        <Movies movieList={movieList} />
      </main>

    </div>
  )
}

export default App
