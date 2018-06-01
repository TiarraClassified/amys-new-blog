import React, { Component } from "react";
import Title from "./wee-components/Title";
import axios from "axios";
import Scroll from "./wee-components/Scroll";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    console.log("comp is moutning");
    axios.get("/api/getBlogs").then(res => {
      console.log(res.data, "blogs");
      this.setState({ blogs: res.data });
    });
  }
  render() {
    return (
      <div>
        <Title />
        <Scroll blogs={this.state.blogs} />
      </div>
    );
  }
}
