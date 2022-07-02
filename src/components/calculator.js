import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logics/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    setState({ ...state, ...calculate(state, e.target.value) });
  };
  return (
    <section className="calc">
      <div>
        <h1>Calculator</h1>
        <p className="display-box">
          <span>{state.total}</span>
          <span>{state.operation}</span>
          <span>{state.next}</span>
        </p>
        <table className="calculator">
          <tbody>
            <tr>
              <td>
                <input
                  type="button"
                  value="AC"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="+/-"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="%"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="orange"
                  value="÷"
                  onClick={handleEvent}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="7"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="8"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="9"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="orange"
                  value="x"
                  onClick={handleEvent}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="4"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="5"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="6"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="orange"
                  value="-"
                  onClick={handleEvent}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="1"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="2"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="3"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="orange"
                  value="+"
                  onClick={handleEvent}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="button"
                  value="0"
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="."
                  onClick={handleEvent}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="orange"
                  value="="
                  onClick={handleEvent}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Calculator;
