import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import NoMatch from "./pages/NoMatch";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
// import Form from "./components/Form";

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component ={Landing}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={Landing} />
      </Switch>
    </div>
  </Router>
)


export default App;

