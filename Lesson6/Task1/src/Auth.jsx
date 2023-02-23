import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    let button;
    if (this.state.isLoggedIn===false) {
      button = <Login onLogin={this.handleLoginClick}/>; 
      
    } else {
      button = <Logout onLogout={this.handleLogoutClick} />;  
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        {button}
      </div>
    );
  }
}

export default Auth;