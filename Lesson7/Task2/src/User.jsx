import React from 'react';



const User = ({ name, age }) => {
  return (
    <li className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
        <span class="transaction__assets">USD → EUR</span>
    </li>
  );
};

export default User;