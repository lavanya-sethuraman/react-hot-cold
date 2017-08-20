import {NEW_GAME, CHECK_GUESS} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const guessGameReducer = (state=initialState, action) => {
    if (action.type === NEW_GAME) {
        return Object.assign({}, state, {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: Math.floor(Math.random() * 100) + 1,
        });
    }
    else if (action.type === CHECK_GUESS) {
        let feedback;
        let guess = action.guess;
        guess = parseInt(guess, 10);
        const difference = Math.abs(guess - this.state.correctAnswer);

        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
        }
        
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            feedback,
            guesses: [...this.state.guesses, guess]
        });
    }
   
    return state;
};

