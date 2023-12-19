
import { useState } from 'react'
import './App.css'
import './Square'
import Square from './Square'

const TURNS = { X: "X", O: "O" }


function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  function updateBoard(index) {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }



  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <div className='game'>
          {board.map((_, index) =>
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>)}
        </div>
      </main>
      <section className='turn'> 
      {<Square>{turn}</Square>}
      </section>
    </>
  )

}

export default App
