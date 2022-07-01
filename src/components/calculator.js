import React from 'react';
import './calculator.css';
import calculate from '../logics/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <section className="calc">
        <div>
          <h1>Calculator</h1>
          <p className="display-box">{next || operation || total || 0}</p>
          <table className="calculator">
            <tbody>
              <tr>
                <td>
                  <input
                    type="button"
                    value="AC"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="+/-"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="%"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="orange"
                    value="÷"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    value="7"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="8"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="9"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="orange"
                    value="x"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    value="4"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="5"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="6"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="orange"
                    value="-"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    value="1"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="2"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="3"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="orange"
                    value="+"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="button"
                    value="0"
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="."
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="orange"
                    value="="
                    onClick={(e) => this.handleEvent(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Calculator;
