import React from 'react';

function Logout(props) {
  return (
    <button onClick={props.onLogout}>
      Logout
    </button>
  )
}

export default Logout;
