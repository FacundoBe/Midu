import Square from "./Square"

export default function WinnerModal({ winner, resetgame }) {

    if (winner === null) { return null }
    return (
        <>
            <div className='winner'>
                <div className='text'>
                    <h2>{winner !== false ? `Ganador` : "Empate"} </h2>
                    {winner &&
                        <header className='win'>
                            <Square>{winner}</Square>
                        </header>
                    }
                    <footer>
                        <button onClick={resetgame} >Jugar de Nuevo</button>
                    </footer>
                </div>

            </div>
        </>
    )
}