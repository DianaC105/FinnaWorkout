import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./landing.css";

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        this.setState({ isLoggedIn: res.data })

      })
      .catch(err => console.log(err.response));
    this.notifyErr();
  };

  notifyErr = () => {
    toast.error("User not found, please try again.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true
    });
  };

  render() {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      return <Redirect to="/home" />
    }

    return (
      <div>
        <Navbar />
        <div className="backlay1"></div>
        <div className="overlay"></div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <form>
              <h3>Login!</h3>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Username" />
                <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-info" onClick={this.login}>Login</button>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default Login;