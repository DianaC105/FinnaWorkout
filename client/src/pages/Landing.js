import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
//import API from "../utils/API";
import "./landing.css";

class Landing extends Component {
  state = {
    
  }

 


  render() {
    return(
        <div>
            <div className="backlay1"></div>
            <div className="overlay"></div>
            <Navbar />
            <div className="container welcomin">
                <div className="row">
                <div className="col-md-12">
                    <h1 className>
                    The <b>ultimate</b> 
                    </h1>
                    <h1>
                    workout experience
                    </h1>
                    <h1>
                    for potatoes like yourself
                    </h1>
                    <h4 className="flavortxt">
                    We're going to break you.
                    </h4>
                    <br />
                </div>
                </div>
                <div className = "row">

                    <div className = "col-md-6 d-flex justify-content-center">
                    <Link
                        to="/signup"
                        style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                        }}
                        className="btn btn-light"
                    >
                        Register
                    </Link>
                    </div>
                    <div className = "col-md-6 d-flex justify-content-center">
                        <Link
                            to="/login"
                            style={{
                            width: "140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                            }}
                            className="btn btn-info"
                        >
                            Log In
                        </Link>
                    </div>

                </div>
        </div>
      </div>
    )
    // If user isn't logged in, don't let them see this page
    

    
  }
}

export default Landing;