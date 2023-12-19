
import { useEffect, useState } from 'react'
import './App.css'
import './Square'
import Square from './Square'
import WinnerModal from './WinnerModal'
import conffeti from 'canvas-confetti'
import { TURNS } from './constantes'
import { checkWinner, checkEndGame } from './utils'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) :
      Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  function updateBoard(index) {
    if (board[index] || winner) return
    setBoard(prevBoard => {
      const newBoard = [...prevBoard]
      newBoard[index] = turn
      const newWinner = checkWinner(newBoard) // chekeo si ha ganador
      window.localStorage.setItem('board', JSON.stringify(newBoard)) //guardo alocal storage
      if (newWinner) {
        setWinner(newWinner)
        conffeti()
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
      }
      return newBoard
    })
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    window.localStorage.setItem('turn', newTurn)
  }

  function resetgame() {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetgame}>Resetear El Juego</button>
        <div className='game'>
          {board.map((_, index) =>
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>)}
        </div>

        <section className='turn'>
          {<Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>}
          {<Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>}
        </section>
        <WinnerModal winner={winner} resetgame={resetgame}></WinnerModal>
      </main>
    </>
  )

}

export default App
