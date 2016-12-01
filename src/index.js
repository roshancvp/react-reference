import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import './index.css';

const user = {
  firstName: "Roshan",
  lastName: "Prabhakar"
}


//Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const welcomeElement = <Welcome name="Sara"/>;


function formatUser(user) {
  return user.firstName + " " + user.lastName;
}

// function tick() {
//   const element = (
//     <div>
//       <h2> It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// function Clock(props) {
//   return (
//     <div>
//       <h2> It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
//
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }
//
// setInterval(tick, 1000);

const element = (
  <h1>
    Hello, {formatUser(user)}
  </h1>
)

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
