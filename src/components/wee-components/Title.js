import React, { Component } from "react";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      enter: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ enter: true });
    }, 10);
  }
  render() {
    return (
      <div>
        <p
          id="title"
          style={
            this.state.enter
              ? {
                  transform: "translate(0, 0) rotate(0)",
                  opacity: 1,
                  transition: "2s"
                }
              : {
                  transform: "translate(-150px, -250px) rotate(-35deg)",
                  opacity: 0
                }
          }
        >
          Micro Mini <br /> Short Stories
        </p>
      </div>
    );
  }
}

//Might have to make this a stateful component.
//have component start at angle and invisible. once it loads, have it fall into place. setTimeout to add class that has the animation.
