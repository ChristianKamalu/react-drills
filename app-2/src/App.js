import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['poop', 'carrot', 'burger']
    }
  }



  render() {
    let splitList = this.state.list.map((item, i) => {
      return <h2 key={i}>{item}</h2>;
    })
    return (
      <div className="App">
        {splitList}
      </div>
    );
  }
}

export default App;
