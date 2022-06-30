import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calc">
        <div>
          <h1>Calculator</h1>
          <table className="calculator">
            <tr>
              <td colSpan="3">
                <input
                  className="display-box"
                  value="0"
                  type="text"
                  id="result"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="AC" />
              </td>
              <td>
                <input type="button" value="+/-" />
              </td>
              <td>
                <input type="button" value="%" />
              </td>
              <td>
                <input type="button" className="orange" value="/" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="7" />
              </td>
              <td>
                <input type="button" value="8" />
              </td>
              <td>
                <input type="button" value="9" />
              </td>
              <td>
                <input type="button" className="orange" value="X" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="4" />
              </td>
              <td>
                <input type="button" value="5" />
              </td>
              <td>
                <input type="button" value="6" />
              </td>
              <td>
                <input type="button" className="orange" value="-" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="1" />
              </td>
              <td>
                <input type="button" value="2" />
              </td>
              <td>
                <input type="button" value="3" />
              </td>
              <td>
                <input type="button" className="orange" value="+" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="button" value="0" />
              </td>
              <td>
                <input type="button" value="." />
              </td>
              <td>
                <input type="button" className="orange" value="/" />
              </td>
            </tr>
          </table>
        </div>
      </section>
    );
  }
}

export default Calculator;
