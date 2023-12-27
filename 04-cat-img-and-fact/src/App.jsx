import './App.css'
import useCatImg from './hooks/useCatImg'
import useCatFact from './hooks/useCatFact'

function App() {

  const { fact, refreshFact } = useCatFact({})
  const { img } = useCatImg({ fact })

  async function handleClick() {refreshFact()}

  return (
    <>
      <h1>Cat Fetch App</h1>
      <div className='captioned-img'>
        <h2 className='text'>{fact.split(" ", 3).join(" ")}</h2>
        <img src={img} alt="" />
      </div>
      <button onClick={handleClick}>
        Get new Fact
      </button>
    </>
  )
}

export default App
