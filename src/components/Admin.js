import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./wee-components/Table";
import axios from "axios";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
      id: null
    };
    this.select = this.select.bind(this);
  }

  select(index, id) {
    this.setState({ selected: index, id });
  }

  deleteStory() {
    axios.delete(`/blog${this.state.id}`).then(res => {
      this.setState({ selected: 0, id: null });
      window.location.reload(); //NEED TO FIGURE OUT A BETTER SOLUTION TO THIS.
    });
  }

  render() {
    return (
      <div>
        <p style={{ textAlign: "center", padding: "20px" }}>
          Welcome, Amy! What eloquence will you bless the world with today, and
          what would you like to do?
        </p>
        <div id="buttons">
          <Link to="/addEdit/0">
            <button>Add</button>
          </Link>
          <Link to={`/addEdit/${this.state.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => this.deleteStory()}>Delete</button>
        </div>
        <br />
        <Table select={this.select} />
      </div>
    );
  }
}
