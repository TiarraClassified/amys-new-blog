import React, { Component } from "react";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      enter: false,
      line: false,
      shiny: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ enter: true });
    }, 10);
    setTimeout(() => {
      this.setState({ line: true });
    }, 1500);
    setTimeout(() => {
      this.setState({ shiny: true });
    }, 2300);
  }

  render() {
    return (
      <div>
        <p
          id="title"
          style={
            this.state.enter
              ? {
                  transform: "translate(0, 0)",
                  opacity: 1,
                  transition: "1.5s"
                }
              : {
                  transform: "translate(-100px, -125px)",
                  opacity: 0
                }
          }
        >
          Micro Mini <br /> Short Stories
        </p>

        <hr
          style={this.state.line ? { width: "100vw", transition: "1s" } : {}}
          id="horizontal-line"
        />
      </div>
    );
  }
}
