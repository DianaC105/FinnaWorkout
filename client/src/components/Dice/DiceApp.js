import React from 'react';
//import logo from './logo.svg';
import './style.css';
//import Die from "./Die";

import ReactDice from "./ReactDice";


class DiceApp extends React.Component {

  render() {
    return (
      <div className="roll">
        Roll Dice for # of Reps
      
      <div>
                   
        <ReactDice
        
        className="diceapp"
          numDice={2}
          rollDone={this.rollDoneCallback}
          ref={dice => this.reactDice = dice}
        />
      </div>
      </div>
    )
  }

  rollAll() {
    this.reactDice.rollAll()
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`)
  }
}


export default DiceApp;
