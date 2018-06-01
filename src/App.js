import React, { Component } from "react";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import "./reset.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
