import React, { Component } from "react";
import Carousel from "./wee-components/carouselWheel";
import axios from "axios";

export default class StoryRoulette extends Component {
  constructor() {
    super();
    this.state = { stories: null };
  }

  componentDidMount() {
    //pull 10 random stories
    axios.get("/random").then(res => {
      this.setState({ stories: res.data });
    });
  }
  render() {
    return (
      <div id="storyRoulette">
        <Carousel />

        <div id="wheel-display" />
      </div>
    );
  }
}
