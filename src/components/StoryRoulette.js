import React, { Component } from "react";
import Carousel from "./wee-components/carouselWheel";
import axios from "axios";

export default class StoryRoulette extends Component {
  constructor() {
    super();
    this.state = { stories: null, selected: null };
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    //pull 10 random stories
    axios.get("/random").then(res => {
      this.setState({ stories: res.data });
    });
  }

  select(pictureURL) {
    this.setState({ selected: pictureURL });
  }

  render() {
    return (
      <div id="storyRoulette">
        <Carousel select={this.select} />

        <div id="wheel-display">
          <img src={`${this.state.selected}`} alt="some image" />
        </div>
      </div>
    );
  }
}
