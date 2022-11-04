import React from 'react';
import calculate from '../logic/calculate';

class Machine extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

clicked = (e) => {
  const data = e.target.innerHTML;
  const result = calculate(this.state, data);
  this.setState(result);
}

render() {
  const { total, next, operation } = this.state;
  return (

    <div id="App">

      <div className="appInput">
        {total}
        {operation}
        {next}
      </div>

      <button type="button" className="appButton" onClick={this.clicked}>AC</button>
      <button type="button" className="appButton" onClick={this.clicked}>+/-</button>
      <button type="button" className="appButton" onClick={this.clicked}>%</button>
      <button type="button" className="appButton op" onClick={this.clicked}>÷</button>
      <button type="button" className="appButton" onClick={this.clicked}>7</button>
      <button type="button" className="appButton" onClick={this.clicked}>8</button>
      <button type="button" className="appButton" onClick={this.clicked}>9</button>
      <button type="button" className="appButton op" onClick={this.clicked}>x</button>
      <button type="button" className="appButton" onClick={this.clicked}>4</button>
      <button type="button" className="appButton" onClick={this.clicked}>5</button>
      <button type="button" className="appButton" onClick={this.clicked}>6</button>
      <button type="button" className="appButton op" onClick={this.clicked}>-</button>
      <button type="button" className="appButton" onClick={this.clicked}>1</button>
      <button type="button" className="appButton" onClick={this.clicked}>2</button>
      <button type="button" className="appButton" onClick={this.clicked}>3</button>
      <button type="button" className="appButton op" onClick={this.clicked}>+</button>
      <button type="button" className="appButton" onClick={this.clicked}>0</button>
      <button type="button" className="appButton" onClick={this.clicked}>.</button>
      <button type="button" className="appButton op" onClick={this.clicked}>=</button>
    </div>
  );
}
}

export default Machine;
