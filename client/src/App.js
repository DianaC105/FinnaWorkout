// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Nav from "./components/Nav";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Nav /> <p>hello</p>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;


import React, { Component } from "react";
// import { BrowserRouter as Router} from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import { Button } from 'reactstrap';
import Example from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Roulette from './components/Roulette';
import workoutpick from "./workoutpick.json";
import Form from "./components/Form";
import Workoutpick from "./components/WorkoutCard";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    workoutpick
  };



  render() {
    return ( 
      <div>
        <Example />
        <Wrapper>
          <Jumbo /> 
          <Chart />
          <Jumbotron /> FinnaWorkOUT
          <Roulette />
          {this.state.workoutpick.map(workoutpick => (
          <Workoutpick
            id={workoutpick.id}
            key={workoutpick.id}
            name={workoutpick.name}
            image={workoutpick.image}
            occupation={workoutpick.occupation}
            location={workoutpick.location}
          />
        ))}
          <Form />
        </Wrapper>
      </div>
    );
  }
}

export default App;

