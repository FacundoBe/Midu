
import { useState } from 'react'
import './App.css'

const API_KEY = "fd161998"

// https://www.omdbapi.com/?apikey=fd161998&s=pirates+of


function App() {
  const [movieList,setMovieList] = useState([])

  function handleSubmit (e) {
    e.preventDefault()
    const {movieInput}=e.target.elements // elemento Input Html
    const  movieName = movieInput.value  
    console.log(movieName)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
   
  
  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header >
        <form onSubmit={handleSubmit}>
          <input name="movieInput"  placeholder='Movie Name' type="text" />
          <button type='submit' > Buscar</button>
        </form>
      </header>
      <main>
        RESULTADOS
      </main>

    </div>
  )
}

export default App
