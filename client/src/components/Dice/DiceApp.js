import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Die from "./Die";
import ReactDice from "./ReactDice";


class DiceApp extends React.Component {

  render() {
    return (
      <div>
                    
        <ReactDice
          numDice={2}
          rollDone={this.rollDoneCallback}
          ref={dice => this.reactDice = dice}
        />
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
