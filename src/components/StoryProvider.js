import React, { Component } from "react";
import axios from "axios";
export const StoryContext = React.createContext([]);

export default class StoryProvider extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get("/api/getBlogs").then(res => {
      console.log(res.data, "blogs");
      this.setState({ blogs: res.data });
    });
  }

  render() {
    return (
      <StoryContext.Provider value={this.state.blogs}>
        {this.props.children}
      </StoryContext.Provider>
    );
  }
}
