import React, { Component } from "react";
import axios from "axios";

export default class AddEdit extends Component {
  constructor() {
    super();
    this.state = {
      blog: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios.get(`/blog${this.props.match.params.id}`).then(res => {
      this.setState({ blog: res.data });
    });
  }

  render() {
    return <div>{JSON.stringify(this.state.blog)}</div>;
  }
}
