import React, { Component } from "react";
import Modal from "react-responsive-modal";


class ResultCard extends Component {
  constructor() {
    super();
    this.state = {
      choseChest: "",
      choseBack: "",
      chosenAbs: "",
      chosenLegs: "",
      error: {},
      modalOpen: false,
      activeModalType: ""


    };
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addClass = (e) => {
    e.target.classList.add("click");
  };

  onOpenModal = (event, target) => {
    console.log("target: "+ target);
    this.setState({ modalOpen: true });
    this.setState({ activeModalType: target});
    console.log(this.state.activeModalType);
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    // const { errors } = this.state;
    const { modalOpen } = this.state;
    return (
      <div className="container">
        <div className="card my-3 mx-auto">
          <i className="fas fa-star" id="favorite" onClick={this.addClass} />
          <div className="row">

            <div className="col-sm-9">
              <h2 className="ml-sm-3 mt-3 text-center text-sm-left">Here's your plan</h2>
              <ul className="list-group list-group-flush mx-3 ml-sm-0 mr-sm-3">
                <li className="list-group-item" onClick={(event) => this.onOpenModal(event, this.props.chosenChest)}>


                  <b>Chest:</b> {this.props.chosenChest}
                </li>
                <Modal open={modalOpen} onClose={this.onCloseModal} center>
                  <h2>Success</h2>
                  <p>
                    Issa Open Now testestest123
                    Lorem ipsum dolor sit amet, cons
                    {this.state.activeModalType}
                   </p>
                </Modal>
                <li className="list-group-item" onClick={(event) => this.onOpenModal(event, this.props.chosenBack)}>
                  <b>Back</b> {this.props.chosenBack}
                </li>
                <li className="list-group-item" onClick={(event) => this.onOpenModal(event, this.props.chosenAbs)}>
                  <b>Abs</b> {this.props.chosenAbs}
                </li>
                <li className="list-group-item" onClick={(event) => this.onOpenModal(event, this.props.chosenLegs)}>
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