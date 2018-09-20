import React, { Component } from 'react';
import Key from './Key';
import Display from './Display';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: '0',
    };
  }

  keys = [
    ['7', '8', '9', '/', 'C'],
    ['4', '5', '6', '*', '('],
    ['1', '2', '3', '-', ')'],
    ['0', '.', '=', '+'],
  ];

  keyPressed = (key) => {
    this.setState((state) => {
      const { display } = state;
      let displayNext = '';
      switch (key) {
        case 'C':
          displayNext = '0';
          break;
        case '=':
          console.log('Compute result!');
          break;
        default:
         displayNext = display + key;
         break;
      }
      return { display: displayNext }
    })
  };

  renderKeyRow(row) {
    return (
      <div className="keyRow">
        {row.map(element => <Key label={element} onKeyPress={this.keyPressed} />)}
      </div>
    )
  }

  render() {
    const { display } = this.state;
    return (
      <div className="App">
        <div className="calcContainer">
          <Display display={display}/>
          <div className="keys">
            {this.keys.map(row => this.renderKeyRow(row))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
