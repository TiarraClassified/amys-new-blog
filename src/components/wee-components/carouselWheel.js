import React, { Component } from "react";
import Testpic from "../../camel-hair.jpg";
import Test2 from "../../camel-two-legs.jpg";
import Test3 from "../../dagger.jpg";
import Test4 from "../../Amy.jpg";
import Test5 from "../../amy-rose-ring.jpg";
import Test6 from "../../camel-sun.jpg";
import Test7 from "../../chess.jpg";
import Test8 from "../../CSSsucks.png";
import Test9 from "../../elon-musk-perfume.jpg";
import Test10 from "../../testbackground.jpg";

export default class CarouselWheel extends Component {
  constructor() {
    super();
    this.state = {
      rotate: 0
    };
  }

  rotate(num, story) {
    console.log(num);
    this.setState({ rotate: num });
    this.props.select(story);
  }

  render() {
    const stories = this.props.stories;
    return (
      stories.length > 0 && (
        <div id="wheel">
          <div id="circle">
            <img
              onClick={() => {
                this.rotate(0, stories[0]);
              }}
              src={stories[0].background}
              alt="temp"
              style={{
                transform: `rotate(${this.state.rotate}deg) translate(100px)`,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(324, stories[1]);
              }}
              src={stories[1].background}
              alt="temp"
              style={{
                transform: `rotate(calc(36deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(288, stories[2]);
              }}
              src={stories[2].background}
              alt="temp"
              style={{
                transform: `rotate(calc(72deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(252, stories[3]);
              }}
              src={stories[3].background}
              alt="temp"
              style={{
                transform: `rotate(calc(108deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(216, stories[4]);
              }}
              src={stories[4].background}
              alt="temp"
              style={{
                transform: `rotate(calc(144deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(180, stories[5]);
              }}
              src={stories[5].background}
              alt="temp"
              style={{
                transform: `rotate(calc(180deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(144, stories[6]);
              }}
              src={stories[6].background}
              alt="temp"
              style={{
                transform: `rotate(calc(216deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(108, stories[7]);
              }}
              src={stories[7].background}
              alt="temp"
              style={{
                transform: `rotate(calc(252deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(72, stories[8]);
              }}
              src={stories[8].background}
              alt="temp"
              style={{
                transform: `rotate(calc(288deg + ${
                  this.state.rotate
                }deg)) translate(100px) `,
                transition: "0.5s"
              }}
            />
            <img
              onClick={() => {
                this.rotate(36, stories[9]);
              }}
              src={stories[9].background}
              alt="temp"
              style={{
                transform: `rotate(calc(324deg + ${
                  this.state.rotate
                }deg)) translate(100px)`,
                transition: "0.5s"
              }}
            />
          </div>
        </div>
      )
    );
  }
}
