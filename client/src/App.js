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


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Jumbotron />
          <Form />
        </Wrapper>
      </div>
      
    </Router>
  );
}

export default App;

