import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'


// https://www.omdbapi.com/?apikey=fd161998&s=pirates+of


function App() {

  const [search, setSearch] = useState("")
  const movieList = useMovies(search)

  function handleSubmit(e) {
    e.preventDefault()
    const { movieInput } = e.target.elements // elemento Input Html
    const inputValue = movieInput.value
    if (inputValue !== search) {
      setSearch(inputValue)
      console.log(inputValue, search)
    }
  }


  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header >
        <form onSubmit={handleSubmit}>
          <input name="movieInput" placeholder='Movie Name' type="text" />
          <button type='submit' > Buscar</button>
        </form>
      </header>
      <main>
        <Movies movieList={movieList} />
      </main>

    </div>
  )
}

export default App
