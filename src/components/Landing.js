import React, { Component } from "react";
import Title from "./wee-components/Title";
// import axios from "axios";
import Scroll from "./wee-components/Scroll";

export default class Landing extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     blogs: []
  //   };
  // }

  render() {
    return (
      <div>
        <Title />
        <Scroll />
      </div>
    );
  }
}
