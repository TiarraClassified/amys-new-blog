import React, { Component } from "react";
import Carousel from "./wee-components/carouselWheel";
import axios from "axios";
import { Link } from "react-router-dom";

export default class StoryRoulette extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      selected: { title: "Select a Picture", date: "The only time is now" }
    };
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    //pull 10 random stories
    axios.get("/random").then(res => {
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
            <Link
              to={`/story/${this.state.selected.id}`}
              style={{ textDecoration: "none", color: "#D7CEC7" }}
            >
              <p>Title: {this.state.selected.title}</p>
              <br />
              <p>Date: {this.state.selected.date}</p>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
