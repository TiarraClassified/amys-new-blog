import React, { Component } from "react";
import axios from "axios";
export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      password: null,
      username: null
    };
  }

  handleInput(fieldOfState, value) {
    console.log("field", fieldOfState, "value", value);
    this.setState({ [fieldOfState]: value });
  }

  submitCreds() {
    let body = {
      create: false, //shit this is not secure. Think of something else! Good thing she doesn't really need to worry about security since she's just writing stories.
      pw: this.state.password,
      un: this.state.username
      // pw: "asldkjfogasfsadqweoiru8ns",
      // un: "the king"
    };
    axios.post("/login", body).then(res => {
      window.location.href = "http://localhost:3000/admin";
    });
  }

  render() {
    console.log("state", this.state.password, this.state.username);
    if (this.props.open) {
      return (
        <div id="backdrop">
          <div id="modal">
            Welcome Amy! Please verify that this is you! <br />
            Password:{" "}
            <input
              onChange={e => {
                this.handleInput("password", e.target.value);
              }}
            />
            <br />
            Username:{" "}
            <input
              onChange={e => {
                this.handleInput("username", e.target.value);
              }}
            />
            <br />
            <button
              onClick={() => {
                this.submitCreds();
              }}
            >
              Submit
            </button>
            <button onClick={() => this.props.close()}>Cancel</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
