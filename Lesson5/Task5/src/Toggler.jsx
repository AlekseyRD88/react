import React, { Component } from 'react';

class Toggler extends Component {
    state = {
      status: false,
      toggler: 'Off',
    }
  handleClick() {
    this.setState({
      status: !this.state.status,
      toggler: !this.state.status ? 'On' : 'Off'
    })
  }

  render() {
    return (
      <div className="toggler" onClick={() => this.handleClick()}>{this.state.toggler}</div>
    );
    

  }
}


export default Toggler;