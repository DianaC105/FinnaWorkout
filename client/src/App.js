import React, { Component } from "react";
// import { BrowserRouter as Router} from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import Example from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
// import Form from "./components/Form";

class App extends Component {
  // Setting this.state.friends to the friends json array
  


  render() {
    return ( 
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;

