import React, { Component } from "react";
import camelHair from "../camel-hair.jpg";
import camelCoupe from "../camel-two-legs.jpg";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      image1: false,
      image2: false,
      header1: false,
      text1: false,
      header2: false,
      text2: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ image1: true });
    }, 100);
    setTimeout(() => {
      this.setState({ image2: true });
    }, 300);
    setTimeout(() => {
      this.setState({ header1: true });
    }, 800);
    setTimeout(() => {
      this.setState({ text1: true });
    }, 900);
  }

  render() {
    return (
      <div id="about">
        <div className="about-info">
          <img
            src={camelHair}
            alt="camel hair"
            style={
              this.state.image1
                ? {
                    width: "40%",
                    position: "absolute",
                    transform: "rotate(0) translate(0)",
                    transition: "1.5s",
                    opacity: 1
                  }
                : {
                    width: "40%",
                    position: "absolute",
                    transform: "rotate(10deg) translate(50%, 50%)",
                    opacity: 0
                  }
            }
          />
          <div>
            <h1
              style={
                this.state.header1
                  ? {
                      transform: "rotate(0) translate(0,0)",
                      transition: "1.5s",
                      opacity: 1
                    }
                  : {
                      transform: "rotate(10deg) translate(50%, 50%)",
                      opacity: 0
                    }
              }
            >
              Some Title
            </h1>
            <p
              style={
                this.state.text1
                  ? {
                      transform: "rotate(0) translate(0,0)",
                      transition: "1.5s",
                      opacity: 1
                    }
                  : {
                      transform: "rotate(10deg) translate(30%, 30%)",
                      opacity: 0
                    }
              }
            >
              Pommy ipsum blighty smeg head chinwag barmy, in the goolies
              gallivanting around yorkshire mixture scrubber. Jellied eels Dalek
              stupendous muck about Union Jack pulled a right corker, atrocious
              laughing gear nowt the black death bargain Betty middle class, had
              a barney with the inlaws it's just not cricket sod's law bloke.
              Northeners well fit gutted what a doddle made a pig's ear of it
              clock round the earhole ee bah gum ponce sod's law, accordingly
              apple and pears who brought loaf scrote therewith warts and all. A
              fiver teacakes chinwag yorkshire pudding argy-bargy and, through
              the dales pork dripping fancied a flutter.
            </p>
          </div>
        </div>
        <img
          src={camelCoupe}
          alt="camel coupe"
          style={
            this.state.image2
              ? {
                  width: "40%",
                  position: "absolute",
                  transform: "rotate(0) translate(0)",
                  transition: "1.5s",
                  opacity: 1,
                  top: "200%",
                  left: "15%"
                }
              : {
                  width: "40%",
                  position: "absolute",
                  top: "200%",
                  left: "15%",
                  transform: "rotate(10deg) translate(50%, 50%)",
                  opacity: 0
                }
          }
        />
      </div>
    );
  }
}
