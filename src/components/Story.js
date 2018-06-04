import React, { Component } from "react";
import { StoryContext } from "./StoryProvider";

export default class Story extends Component {
  render() {
    var id = this.props.match.params.id;
    return (
      <StoryContext.Consumer>
        {blogs => {
          let current = blogs[id] || { background: null, title: null };
          console.log(current);
          return (
            <div>
              <img src={`${current.background}`} alt={`${current.title}`} />
            </div>
          );
        }}
      </StoryContext.Consumer>
    );
  }
}
