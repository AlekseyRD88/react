import React from 'react';
import './index.scss';
import moment from 'moment';

export const formatDate = date => moment().diff(moment(date, "DD MMM YYYY"), 'years');

// moment(date).format("DD MMM YYYY");

const Greeting = (props) => {
  return (
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${formatDate(props.birthDate)} years old`}
    </div>
);
};
export default Greeting;