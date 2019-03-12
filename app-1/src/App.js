import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayText: ''
    }
  }

  display = (text) => {
    this.setState({
      displayText: text
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.display(e.target.value)}/>
        <p>{this.state.displayText}</p>
      </div>
    );
  }
}

export default App;
