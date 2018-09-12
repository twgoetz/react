import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="outer">
            <div className="block">
              <div className="inner" />
            </div>
          </div>
          <div className="outer">
            <div className="block">
              <div className="inner" />
            </div>
          </div>
        </div>
        <div className="outer">
          <div className="small" />
          <div className="small" />
          <div className="small" />
          <div className="small" />
          <div className="small" />
        </div>
      </div>
    );
  }
}

export default App;
