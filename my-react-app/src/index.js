import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "Red",
      year: 1964
    };
  }
  changeColr = () => {
    if(this.state.color === "blue")
      this.setState( {color: "Red"});
    else
    this.setState( {color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
        type="button"
        onClick={this.changeColr}
        >Change color</button>
      </div>
    );
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));
/*
//--------- Get object from different file ---------
import Car from './Car.js';

ReactDOM.render(<Car />, document.getElementById('root'));

/*
// ---------------- React Class --------------------
class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>
  }
}

class Garage extends React.Component {
  render() {
    return (
    <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </div>
    );
  }
}
ReactDOM.render(<Garage />, document.getElementById('root'));
/*--------------------------------------------------
// React Component Properties (props)
function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));

/*
// React Component
function Car() {
  return <h2>Hi, I am a Car!</h2>
}

ReactDOM.render(<Car />, document.getElementById('root'));

/*
const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

ReactDOM.render(myelement, document.getElementById('root'));
*/