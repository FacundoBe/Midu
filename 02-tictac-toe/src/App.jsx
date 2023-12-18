
import './App.css'

function App() {

  const TURNS = { X: "X", O: "=" }
  const board = Array(9).fill(null)

  return (
    <>
      <main className='board'>
        <div className='game'>
          {board.map((square, index) => <div key={index} className='square'>{index + 1} </div>)}
        </div>
      </main>
    </>
  )

}

export default App
