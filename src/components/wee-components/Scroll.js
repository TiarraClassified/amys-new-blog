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
      fade5: false,
      fade6: false,
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
      }, 300);

      setTimeout(() => {
        this.setState({
          fade3: true
        });
      }, 600);

      setTimeout(() => {
        this.setState({
          fade4: true
        });
      }, 900);

      setTimeout(() => {
        this.setState({
          fade5: true
        });
      }, 1200);

      setTimeout(() => {
        this.setState({
          fade6: true
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
                          transition: `2s`
                        }
                      : { opacity: 0, height: 0 }
                  }
                />
                {/* display the first 6 with alternating fade-in, then display the rest normally. */}
                {/* first */}
                <div
                  className="right"
                  style={
                    this.state.fade1
                      ? { opacity: 1, transition: `2s` }
                      : { opacity: 0 }
                  }
                >
                  <Link
                    to={`/story/${blogs[0].id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="timelinetitle">
                      {blogs.length > 0 && blogs[0].title}
                    </p>
                  </Link>

                  <p className="timelinedate">
                    {blogs.length > 0 && blogs[0].date}
                  </p>
                </div>

                {/* second */}
                <div
                  className="left"
                  style={
                    this.state.fade2
                      ? { opacity: 1, transition: `2s` }
                      : { opacity: 0 }
                  }
                >
                  <Link
                    to={`/story/${blogs[1].id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="timelinetitle">
                      {blogs.length > 0 && blogs[1].title}
                    </p>
                  </Link>
                  <p className="timelinedate">
                    {blogs.length > 0 && blogs[1].date}
                  </p>
                </div>
                {/* third */}
                <div
                  className="right"
                  style={
                    this.state.fade3
                      ? { opacity: 1, transition: `2s` }
                      : { opacity: 0 }
                  }
                >
                  <Link
                    to={`/story/${blogs[2].id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="timelinetitle">
                      {blogs.length > 0 && blogs[2].title}
                    </p>
                  </Link>

                  <p className="timelinedate">
                    {blogs.length > 0 && blogs[2].date}
                  </p>
                </div>

                {/* fourth */}
                <div
                  className="left"
                  style={
                    this.state.fade4
                      ? { opacity: 1, transition: `2s` }
                      : { opacity: 0 }
                  }
                >
                  <Link
                    to={`/story/${blogs[3].id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="timelinetitle">
                      {blogs.length > 0 && blogs[3].title}
                    </p>
                  </Link>
                  <p className="timelinedate">
                    {blogs.length > 0 && blogs[3].date}
                  </p>
                </div>
                {/* fifth */}
                <div
                  className="right"
                  style={
                    this.state.fade5
                      ? { opacity: 1, transition: `2s` }
                      : { opacity: 0 }
                  }
                >
                  <Link
                    to={`/story/${blogs[4].id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="timelinetitle">
                      {blogs.length > 0 && blogs[4].title}
                    </p>
                  </Link>

                  <p className="timelinedate">
                    {blogs.length > 0 && blogs[4].date}
                  </p>
                </div>

                {/* sixth */}
                <div
                  className="left"
                  style={
                    this.state.fade6
                      ? { opacity: 1, transition: `2s` }
                      : { opacity: 0 }
                  }
                >
                  <Link
                    to={`/story/${blogs[5].id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p className="timelinetitle">
                      {blogs.length > 0 && blogs[5].title}
                    </p>
                  </Link>
                  <p className="timelinedate">
                    {blogs.length > 0 && blogs[5].date}
                  </p>
                </div>
                {/* display the rest after a certain scroll height */}
                {blogs.slice(6).map((blog, index) => {
                  if (index % 2 === 0) {
                    return (
                      <div
                        className="right"
                        style={
                          this.state.fade1
                            ? { opacity: 1, transition: `1s` }
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
                            ? { opacity: 1, transition: `1s` }
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
