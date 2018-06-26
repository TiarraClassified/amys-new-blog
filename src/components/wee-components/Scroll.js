import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { StoryContext } from "../StoryProvider";

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
      <StoryContext.Consumer>
        {blogs => {
          if (blogs.length > 0) {
            var transitionTime = 3;
            return (
              <div className="timeline">
                <p className="timelinetext">Story Timeline</p>
                <div
                  className="line"
                  style={
                    this.state.line
                      ? {
                          opacity: 1,
                          height: "1000px",
                          transition: "3s"
                        }
                      : { opacity: 0, height: 0 }
                  }
                />

                {blogs.map((blog, index) => {
                  ++transitionTime;
                  if (index % 2 === 0) {
                    return (
                      <div
                        className="right"
                        style={
                          this.state.fade1
                            ? { opacity: 1, transition: `${transitionTime}s` }
                            : { opacity: 0 }
                        }
                      >
                        <Link
                          to={`/story/${blog.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <p className="timelinetitle">
                            {blogs.length > 0 && blog.title}
                          </p>
                        </Link>

                        <p className="timelinedate">
                          {blogs.length > 0 && blog.date}
                        </p>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="left"
                        style={
                          this.state.fade2
                            ? { opacity: 1, transition: `${transitionTime}s` }
                            : { opacity: 0 }
                        }
                      >
                        <Link
                          to={`/story/${blog.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <p className="timelinetitle">
                            {blogs.length > 0 && blog.title}
                          </p>
                        </Link>
                        <p className="timelinedate">
                          {blogs.length > 0 && blog.date}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            );
          }
        }}
      </StoryContext.Consumer>
    );
  }
}
