import React from 'react';

function Login(props) {
  return (
    <button onClick={props.onLogin}>
      Login
    </button>
  )
}

export default Login;