import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '',
      result: 0
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.times = this.times.bind(this);
    this.over = this.over.bind(this);

    this.clear = this.clear.bind(this);
  }

  setNum1(event) {
    this.setState({ num1: event.target.value });
  }

  setNum2(event) {
    this.setState({ num2: event.target.value });
  }

  plus() {
    this.setState({
      result: parseInt(this.state.num1) + parseInt(this.state.num2)
    });
  }

  minus() {
    this.setState({
      result: parseInt(this.state.num1) - parseInt(this.state.num2)
    });
  }

  times() {
    this.setState({
      result: parseInt(this.state.num1) * parseInt(this.state.num2)
    });
  }

  over() {
    this.setState({
      result: parseInt(this.state.num1) / parseInt(this.state.num2)
    });
  }

  clear() {
    this.setState({ num1: '', num2: '' });
  }

  render() {
    let { num1, num2, result } = this.state;

    return (
      <div>
        <input
            type="text"
            onChange={this.setNum1}
            value={num1}>
        </input>

        <button onClick={this.plus}>+</button>

        <button onClick={this.minus}>-</button>

        <button onClick={this.times}>*</button>

        <button onClick={this.over}>/</button>

        <input
            type="text"
            onChange={this.setNum2}
            value={num2}>
        </input>

        <button onClick={this.clear}>Clear</button>

        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;
