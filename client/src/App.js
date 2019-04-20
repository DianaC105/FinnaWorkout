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
import Jumbo from "./components/Jumbotron";
import Form from "./components/Form";


class App extends Component {
  render() {
    return ( 
      <div>
        <Example />
        <Wrapper>
          <Jumbo /> 
          <Chart />
          <Form />
        </Wrapper>
      </div>
    );
  }
}

export default App;

