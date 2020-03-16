import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Player from '../player/Player';
import Symbol from '../symbol/Symbol';

import './Board.scss';


export default class Board extends Component {

  constructor(props) {
    super(props);
    this.isDisabled = false;
    this.symbols = ["rock" , "paper", "scissors"]
    this.state = {
      mode: 'Player vs Computer',
      player1: { name: 'User', symbol: '', score: 0, type: 'user' },
      player2: { name: 'Computer', symbol: '', score: 0, type: 'computer' },
      winner: "Start a new Game"
    }
  }


  UNSAFE_componentWillMount = () => {
    if(this.props.location.state) {
      const mode = this.props.location.state.mode;
      if(mode === 'Computer vs Computer') {
        const player1 = { name: 'Computer 1', symbol: '', score: 0, type: 'computer' };
        const player2 = { name: 'Computer 2', symbol: '', score: 0, type: 'computer' };
        this.setState({ mode: mode, player1: player1, player2: player2 });
      }
    }
  }

  // RESET THE GAME TO INITIAL STATE
  reset = () => {
    const player1 = this.state.player1;
    const player2 = this.state.player2;
    this.setState({
      player1: { ...player1, symbol: '', score: 0 },
      player2: { ...player2, symbol: '', score: 0 },
      winner: 'Start a new Game'
    })
  }

  // DECIDE WINNER BASED ON THE STATE
  decideWinner = ()=> {
    const player1 = this.state.player1;
    const player2 = this.state.player2;
		if(player1.symbol === player2.symbol) {
      this.isDisabled = false;
			return "Draw !"
		}
		if((player1.symbol === "rock" && player2.symbol === "scissors") ||
			(player1.symbol === "paper" && player2.symbol === "rock") ||
			(player1.symbol === "scissors" && player2.symbol === "paper")) {
          this.setState({...player1, score: player1.score++ })
          this.isDisabled = false;
          return `${ player1.name } wins !`
    }
    this.setState({ ...player2, score: player2.score++ });
    this.isDisabled = false;
		return `${ player2.name } wins !`
	}

  // METHOD TO RUN A GAMEs
	runGame = (symbol) => {
    this.isDisabled = true;
    const player1 = this.state.player1;
    const player2 = this.state.player2;
    let counter = 0;
		let myInterval = setInterval(() => {
      counter++;
      this.setState({
        player1: { ...player1, symbol: this.symbols[Math.floor(Math.random()*3)] },
        player2: { ...player2, symbol: this.symbols[Math.floor(Math.random()*3)] },
        winner: ""
      })
			if(counter > 15) {
        if(symbol) {
          this.setState({ player1: { ...player1, symbol: symbol } })
        } 
				clearInterval(myInterval)
				this.setState({ winner: this.decideWinner() })
			}
		},100)
	}

  render() {    

    // VARIABLES FOR STATE
    const mode = this.state.mode;
    const player1 = this.state.player1;
    const player2 = this.state.player2;

    // LOOPING FOR USER PLAYER BUTTONS
    const playButtons = this.symbols.map(symbol => (      
      <button className = "play_button_item " disabled = { this.isDisabled } 
        onClick = { () => this.runGame(symbol) } 
        key = { symbol } >
        <Symbol symbol = {symbol} color = "#FFFEFC" />
      </button> 
    ))
    

    // MODE TYPE BUTTONS
    const modeTypeButtons =  (
      <React.Fragment>
        { mode === 'Player vs Computer' 
        ? <React.Fragment>
            <p className = "play_text">Choose any to play:</p> 
            <div className="play_button">{ playButtons }</div>
          </React.Fragment>
        : <div className="play_run">
            <button className = "play_run_button" disabled = { this.isDisabled } 
              onClick = { () => this.runGame() }>
              <Symbol symbol = "play" color = "#FFFEFC" />
            </button>  
          </div>
        }
      </React.Fragment>
    )

    return (
      <div className="play">
        <h3 className="play_title">{ mode }</h3>
        <div className="play_board">
          <div className="play_board_players">
            <Player player = { player1 } />
            <Player player = { player2 } />
          </div>
          <br/>
          <br/>
          <div className="play_board_result">
            <p className="play_board_result_text">{ this.state.winner }</p>
          </div>
        </div>
        { modeTypeButtons }
        <div className="play_footer">
          <Link to="/" className = "play_footer_button change_mode">
            CHANGE MODE
          </Link>
          <button onClick={this.reset} className = "play_footer_button reset" >RESET</button>
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  mode: PropTypes.string
}