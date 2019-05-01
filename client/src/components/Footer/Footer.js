import React, { Component } from 'react'
import "./style.css"

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="foot">Developed by: Diana Carrillo, Danielle Dees, Peter Hsiao, Mike Brown, Uriel Meneses + many TA's
        <a href="https://github.com/DianaC105/FinnaWorkout.git" target="blank">  {" " } 
        <i class="fab fa-github"></i></a>
        
        </footer>
      </div>
    )
  }
}

export default Footer
