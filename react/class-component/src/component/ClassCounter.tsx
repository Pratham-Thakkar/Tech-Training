import { Component, ReactNode } from "react";

export class Counter extends Component {
  state = {
    counter: 0,
  };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  alertBox = () => {
    const counter = this.state.counter;
    setTimeout(() => {
      alert(`Count` + counter);
    }, 3000);
  };

  render(): ReactNode {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button type="button" onClick={this.increaseCounter}>
          Click
        </button>
        <button type="button" onClick={this.alertBox}>
          Alert
        </button>
      </div>
    );
  }
}
