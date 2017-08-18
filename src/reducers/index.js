import {GET_GUESSES, GIVE_FEEDBACK, SET_CORRECT_ANSWER} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const guessGameReducer = (state=initialState, action) => {
    if (action.type === GET_GUESSES) {
        return Object.assign({}, state, {
           guesses: action.guesses
        });
    }
    else if (action.type === GIVE_FEEDBACK) {
        return Object.assign({}, state, {
            feedback: action.feedback
        });
    }
    else if (action.type === SET_CORRECT_ANSWER) {
        return Object.assign({}, state, {
           answer: action.answer
        });
    }
    return state;
};

