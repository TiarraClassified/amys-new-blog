import React, { Component } from "react";
import axios from "axios";
import Landing from "./Landing";

export default function AuthRouter(Comp) {
  class Filler extends Component {
    constructor() {
      super();
      this.state = {
        verification: false,
        done: false
      };
    }

    componentDidMount() {
      axios.get("/verification").then(resp => {
        this.setState({ verification: resp.data, done: true });
      });
    }

    render() {
      console.log("state", this.state.verification);
      return (
        <div>
          {this.state.done && this.state.verification ? <Comp /> : <Landing />}
        </div>
      );
    }
  }
  return Filler;
}
