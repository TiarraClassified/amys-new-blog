import React, { Component } from "react";
import Title from "./wee-components/Title";
import Scroll from "./wee-components/Scroll";
import Modal from "./wee-components/Modal";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      openModal: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ openModal: !this.state.openModal });
  }

  render() {
    return (
      <div>
        <Title />
        <Scroll />
        <Modal open={this.state.openModal} close={this.openModal} />
        <div
          onClick={() => this.openModal(true)}
          style={{
            width: "20px",
            height: "20px",
            position: "fixed",
            bottom: 0,
            left: 0
          }}
        />
      </div>
    );
  }
}
