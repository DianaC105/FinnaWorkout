import React, {Component} from "react";
import {Link} from "react-router-dom";
//import API from "../utils/API";
import "./Homepage.css";

class Landing extends Component {
  state = {
    
  }

 


  render() {
    return(
        <div className="container welcomin">
            <div className="row">
            <div className="col-md-12">
                <h4 className="text-center">
                The <b>ultimate</b> workout experience for potatoes like yourself
                </h4>
                <p className="text-center">
                We're going to break you.
                </p>
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
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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
                        className="btn btn-large btn-flat waves-effect white black-text"
                    >
                        Log In
                    </Link>
                </div>

            </div>
      </div>
    )
    // If user isn't logged in, don't let them see this page
    

    
  }
}

export default Landing;