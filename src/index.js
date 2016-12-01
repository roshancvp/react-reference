import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const user = {
  firstName: "Roshan",
  lastName: "Prabhakar"
}

function formatUser(user) {
  return user.firstName + " " + user.lastName;
}

const element = (
  <h1>
    Hello, {formatUser(user)}
  </h1>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
