import React, { Component } from "react";
import { StoryContext } from "./StoryProvider";

export default class Story extends Component {
  constructor() {
    super();
    this.state = {
      enter: true,
      blur2: true,
      opacity: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ enter: false });
    }, 500);
    setTimeout(() => {
      this.setState({ opacity: false });
    }, 600);
    setTimeout(() => {
      this.setState({ blur2: false });
    }, 900);
  }

  render() {
    var id = this.props.match.params.id;
    return (
      <StoryContext.Consumer>
        {blogs => {
          let current = blogs.filter(blog => blog.id == id)[0] || {
            background: null,
            title: null
          };
          return (
            <div id="story">
              <img
                src={`${current.background}`}
                alt={`${current.title}`}
                style={
                  this.state.enter
                    ? {
                        opacity: 0,
                        transform: "rotate(-10deg) translate(-10%, -10%)"
                      }
                    : {
                        opacity: 1,
                        transform: "rotate(0) translate(0,0)",
                        transition: "0.5s"
                      }
                }
              />
              <div
                id="story-text"
                style={
                  this.state.opacity
                    ? { opacity: 0 }
                    : { opacity: 1, transition: "0.5s" }
                }
              >
                <h1
                  style={
                    this.state.blur2
                      ? { filter: "blur(6px)", opacity: 0 }
                      : { filter: "blur(0)", transition: ".8s" }
                  }
                >
                  {current.title}
                </h1>
                <p
                  style={
                    this.state.blur2
                      ? { filter: "blur(6px)", opacity: 0 }
                      : { filter: "blur(0)", transition: ".8s" }
                  }
                >
                  {current.content}
                </p>
              </div>
            </div>
          );
        }}
      </StoryContext.Consumer>
    );
  }
}
