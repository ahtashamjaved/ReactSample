import React from 'react';
import ReactDOM from 'react-dom';

// -------- React Lists ----------------------


function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

/*
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', "Audi"];
  return (
    <>
    <h1>Who lives in my garage?</h1>
    <ul>
      {cars.map((car) => <Car brand= {car} />)}
    </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
// -------- Logical && Operator --------------
/*
function Garage(props) {
  const cars = props.cars;
  return (
    <>
    <h1>Garage</h1>
    {cars.length > 0 &&
    <h2>
      You have {cars.length} cars in your garage.
    </h2>
    }
    </>
  );
    
  }
  const cars = ['Ford', 'BMW', 'Audi'];
  ReactDOM.render(<Garage cars = {cars} />,
    document.getElementById('root')
    );

// -------- React if ---------------
/*
function MissedGoal() {
  return <h1>Missed</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>
}

function Goal(props) {
  const isGoal = props.isGoal;
  if(isGoal) {
    return <MadeGoal/>
  }
  return <MissedGoal />
}
ReactDOM.render(
  <Goal isGoal = {false} />, document.getElementById('root')
);

// -------- Components --------------------
/*
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