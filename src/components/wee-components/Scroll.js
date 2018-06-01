import React, { Component } from "react";
import "../../App.css";

export default class Scroll extends Component {
  constructor() {
    super();
    this.state = {
      fade1: false,
      fade2: false,
      fade3: false,
      fade4: false,
      line: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY > 300) {
      this.setState({
        fade1: true
      });

      setTimeout(() => {
        this.setState({
          fade2: true
        });
      }, 500);

      setTimeout(() => {
        this.setState({
          fade3: true
        });
      }, 1000);

      setTimeout(() => {
        this.setState({
          fade4: true
        });
      }, 1500);
    }

    if (window.scrollY > 450) {
      this.setState({
        line: true
      });
    }
  }

  render() {
    return (
      <div className="timeline">
        <p className="timelinetext">Story Timeline</p>
        <div
          className="line"
          style={
            this.state.line
              ? { opacity: 1, height: "1000px", transition: "3s" }
              : { opacity: 0, height: 0 }
          }
        />

        <div
          className="right"
          style={
            this.state.fade1 ? { opacity: 1, transition: "3s" } : { opacity: 0 }
          }
        >
          <p className="timelinetitle">
            {this.props.blogs.length > 0 && this.props.blogs[2].title}
          </p>

          <p className="timelinedate">
            {this.props.blogs.length > 0 && this.props.blogs[2].date}
          </p>
        </div>

        <div
          className="left"
          style={
            this.state.fade2 ? { opacity: 1, transition: "3s" } : { opacity: 0 }
          }
        >
          <p className="timelinetitle">
            {this.props.blogs.length > 0 && this.props.blogs[3].title}
          </p>
          <p className="timelinedate">
            {this.props.blogs.length > 0 && this.props.blogs[3].date}
          </p>
        </div>

        <div
          className="right"
          style={
            this.state.fade3 ? { opacity: 1, transition: "3s" } : { opacity: 0 }
          }
        >
          <p className="timelinetitle">
            {this.props.blogs.length > 0 && this.props.blogs[4].title}
          </p>
          <p className="timelinedate">
            {this.props.blogs.length > 0 && this.props.blogs[4].date}
          </p>
        </div>

        <div
          className="left"
          style={
            this.state.fade4 ? { opacity: 1, transition: "3s" } : { opacity: 0 }
          }
        >
          <p className="timelinetitle">
            {this.props.blogs.length > 0 && this.props.blogs[5].title}
          </p>
          <p className="timelinedate">
            {this.props.blogs.length > 0 && this.props.blogs[5].date}
          </p>
        </div>
      </div>
    );
  }
}
