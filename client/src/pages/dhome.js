import React, { Component } from "react";
// import { BrowserRouter as Router} from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import { Button } from 'reactstrap';
import Example from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Roulette from './components/Roulette';
import workoutpick from "./workoutpick.json";
import Workoutpick from "./components/WorkoutCard";


class App extends Component {
 
  state = {
    workoutpick
  };



  render() {
    return ( 
      <div>
        <Example />
        <Wrapper>
          <Jumbotron />
          {/* <Roulette /> */}
          {this.state.workoutpick.map(workoutpick => (
          <Workoutpick
            id={workoutpick.id}
           
          />
        ))}
        
        </Wrapper>
      </div>
    );
  }
}

export default App;

