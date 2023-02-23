import React, { Component } from 'react';
import Expand from './Expand.jsx';


class App extends Component {
  render() {
    return(
      <div className="app">
        <Expand isOpen={this.isOpen} onClick={this.hideText} title="some title">
        <p>Some text</p>
        </Expand>
      </div>
    );
  }
}

export default App;