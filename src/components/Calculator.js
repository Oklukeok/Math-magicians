import React from 'react';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="App">
        <input className="appInput" type="number" placeholder="0" />
        <button type="button" className="appButton">AC</button>
        <button type="button" className="appButton">+/-</button>
        <button type="button" className="appButton">%</button>
        <button type="button" className="appButton op">÷</button>
        <button type="button" className="appButton">7</button>
        <button type="button" className="appButton">8</button>
        <button type="button" className="appButton">9</button>
        <button type="button" className="appButton op">X</button>
        <button type="button" className="appButton">4</button>
        <button type="button" className="appButton">5</button>
        <button type="button" className="appButton">6</button>
        <button type="button" className="appButton op">-</button>
        <button type="button" className="appButton">1</button>
        <button type="button" className="appButton">2</button>
        <button type="button" className="appButton">3</button>
        <button type="button" className="appButton op">+</button>
        <button type="button" className="appButton">0</button>
        <button type="button" className="appButton">.</button>
        <button type="button" className="appButton op">=</button>
      </div>
    );
  }
}

export default Calculator;
