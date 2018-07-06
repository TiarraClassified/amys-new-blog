import React, { Component } from "react";
import Carousel from "./wee-components/carouselWheel";
import axios from "axios";
import { Link } from "react-router-dom";

export default class StoryRoulette extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      selected: null
    };
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    //pull 10 random stories
    axios.get("/random").then(res => {
      console.log(res.data);
      this.setState({ stories: res.data });
    });
  }

  select(story) {
    this.setState({ selected: story });
  }

  render() {
    return (
      <div id="storyRoulette">
        <Carousel select={this.select} stories={this.state.stories} />

        <div id="wheel-display">
          {this.state.selected && (
            <Link to={`/story/${this.state.selected.id}`}>
              <p>{this.state.selected.title}</p>
              <p>{this.state.selected.date}</p>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
