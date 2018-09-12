import React, { Component } from 'react';
import './App.css';


class App extends Component {
  keys = [
    ['7', '8', '9', '/', 'C'],
    ['4', '5', '6', '*', '('],
    ['1', '2', '3', '-', ')'],
    ['0', '.', '=', '+'],
  ];

  renderKey(keyLabel) {
    return <div className="key">{keyLabel}</div>
  }

  renderKeyRow(row) {
    return (
      <div className="keyRow">
        {row.map(element => this.renderKey(element))}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="calcContainer">
          <div className="display"></div>
          <div className="keys">
            {this.keys.map(row => this.renderKeyRow(row))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
