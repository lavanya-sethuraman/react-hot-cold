export const NEW_GAME = 'NEW_GAME';
export const newGame = () =>{
    type: NEW_GAME
}
export const CHECK_GUESS = 'CHECK_GUESS';
export const checkGuess = guess =>{
    type: CHECK_GUESS,
    guess
}


