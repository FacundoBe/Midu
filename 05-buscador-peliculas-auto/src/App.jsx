import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'

function App() {

  const[sort,setSort] = useState(false)
  const [validSearch, setValidSearch] = useState("")
  const { search, setSearch, err } = useSearch({setValidSearch})
  const movieList = useMovies({validSearch, sort})

  function handleChange(e) {
    e.preventDefault()
    const newSearch = e.target.value
    setSearch(newSearch)
  }
  
  function handleSubmit (e) {e.preventDefault()}

  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header >
        <form onSubmit={handleSubmit}>
          <input value={search}
            onChange={handleChange} name="movieInput"
            placeholder='Movie Name' type="text"
            style={{ border: '3px solid transparent', borderColor: err ? 'red' : 'transparent' }}
          />
          <input type="checkbox" name="sort" onChange={()=> setSort(!sort)} />
          <label htmlFor="sort">Sorted by year</label>
        </form>

      </header>
      <main>
        {err && <h2 style={{ color: '#99100add' }} >{err}</h2>}

        {!err && <Movies movieList={movieList} />}
      </main>

    </div>
  )
}

export default App
