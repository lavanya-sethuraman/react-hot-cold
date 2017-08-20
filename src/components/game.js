import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {newGame,checkGuess} from '../actions'

export class Game extends React.Component {
    render() {
        return (
            <div>
                <Header onNewGame={() => this.props.dispatch(newGame())}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.props.dispatch(checkGuess(guess))} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return ({
    guesses: state.guesses,
    feedback : state.feedback,
    correctAnswer : state.correctAnswer
    });
}


export default connect(mapStateToProps)(Game);
