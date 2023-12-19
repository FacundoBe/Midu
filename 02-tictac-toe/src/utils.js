import { WINNER_COMBOS } from './constantes'

export function checkWinner(boardToCheck) {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
}

export function checkEndGame(boardToCheck) {
    return boardToCheck.every((square) => square !== null)
}