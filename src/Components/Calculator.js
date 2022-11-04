import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Machine = () => {
  const [count, setCount] = useState({
    total: 0,
    next: null,
    operation: null,

  });

  const clicked = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(count, data);
    setCount(result);
  };

  const { total, next, operation } = count;
  return (

    <div id="App">

      <div className="appInput">
        {total}
        {operation}
        {next}
      </div>

      <button type="button" className="appButton" onClick={clicked}>AC</button>
      <button type="button" className="appButton" onClick={clicked}>+/-</button>
      <button type="button" className="appButton" onClick={clicked}>%</button>
      <button type="button" className="appButton op" onClick={clicked}>÷</button>
      <button type="button" className="appButton" onClick={clicked}>7</button>
      <button type="button" className="appButton" onClick={clicked}>8</button>
      <button type="button" className="appButton" onClick={clicked}>9</button>
      <button type="button" className="appButton op" onClick={clicked}>x</button>
      <button type="button" className="appButton" onClick={clicked}>4</button>
      <button type="button" className="appButton" onClick={clicked}>5</button>
      <button type="button" className="appButton" onClick={clicked}>6</button>
      <button type="button" className="appButton op" onClick={clicked}>-</button>
      <button type="button" className="appButton" onClick={clicked}>1</button>
      <button type="button" className="appButton" onClick={clicked}>2</button>
      <button type="button" className="appButton" onClick={clicked}>3</button>
      <button type="button" className="appButton op" onClick={clicked}>+</button>
      <button type="button" className="appButton" onClick={clicked}>0</button>
      <button type="button" className="appButton" onClick={clicked}>.</button>
      <button type="button" className="appButton op" onClick={clicked}>=</button>
    </div>
  );
};

export default Machine;
