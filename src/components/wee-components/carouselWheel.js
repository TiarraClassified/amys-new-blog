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

import axios from "axios";

export default class CarouselWheel extends Component {
  constructor() {
    super();
    this.state = {
      rotate: 0
    };
  }

  rotate(num) {
    console.log(num);
    this.setState({ rotate: num });
  }

  render() {
    return (
      <div id="wheel">
        <div id="circle">
          <img
            onClick={() => {
              this.rotate(0);
            }}
            src={Testpic}
            alt="temp"
            style={{
              transform: `rotate(${this.state.rotate}deg) translate(100px)`,
              transition: "0.5s"
            }}
          />
          <img
            onClick={() => {
              this.rotate(324);
            }}
            src={Test2}
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
              this.rotate(288);
            }}
            src={Test3}
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
              this.rotate(252);
            }}
            src={Test4}
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
              this.rotate(216);
            }}
            src={Test5}
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
              this.rotate(180);
            }}
            src={Test6}
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
              this.rotate(144);
            }}
            src={Test7}
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
              this.rotate(108);
            }}
            src={Test8}
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
              this.rotate(72);
            }}
            src={Test9}
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
              this.rotate(36);
            }}
            src={Test10}
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
    );
  }
}
