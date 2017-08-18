export const GET_GUESSES = 'GET_GUESSES';
export const getGuesses = guesses => ({
    type: GET_GUESSES,
    guesses
});


export const GIVE_FEEDBACK = 'GIVE_FEEDBACK';
export const giveFeedback = feedback => ({
    type: GIVE_FEEDBACK,
    feedback
});


export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';
export const setCorrectAnswer = answer => ({
    type: SET_CORRECT_ANSWER,
    answer
});
