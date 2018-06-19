import React, { Component } from "react";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import "./reset.css";
import "./App.css";
import StoryProvider from "./components/StoryProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <StoryProvider>
          <Routes />
        </StoryProvider>
      </div>
    );
  }
}

export default App;

//have the navbar do login and then pass down session to routes?
