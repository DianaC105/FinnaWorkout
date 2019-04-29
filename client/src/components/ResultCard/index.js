import React, { Component } from "react";

class ResultCard extends Component {
  constructor() {
    super();
    this.state = {
      choseChest: "",
      choseBack: "",
      chosenAbs: "",
      chosenLegs: "",
      error: {}


    };
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addClass = (e) => {
    e.target.classList.add("click");
  }

  render() {
    // const { errors } = this.state;
    return (
      <div className="container">
        <div className="card my-3 mx-auto">
          <i className="fas fa-star" id="favorite" onClick={this.addClass} />
          <div className="row">
           
            <div className="col-sm-9">
              <h2 className="ml-sm-3 mt-3 text-center text-sm-left">Heres your plan}</h2>
              <ul className="list-group list-group-flush mx-3 ml-sm-0 mr-sm-3">
                <li className="list-group-item">
                  <b>Chest:</b> {this.props.chosenChest}
                </li>
                <li className="list-group-item">
                  <b>Back</b> {this.props.chosenBack}
                </li>
                <li className="list-group-item">
                  <b>Abs</b> {this.props.chosenAbs}
                </li>
                <li className="list-group-item">
                  <b>Legs</b> {this.props.chosenLegs}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default ResultCard;