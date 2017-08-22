export const NEW_GAME = 'NEW_GAME';
export const CHECK_GUESS = 'CHECK_GUESS';

export const newGame = () => { 
    return {
        type: NEW_GAME
    }
}

export const checkGuess = guess => {
    return {
      type: CHECK_GUESS,
      guess: guess
    }
}