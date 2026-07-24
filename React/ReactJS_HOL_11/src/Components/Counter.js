import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: 'Use the buttons to trigger React events.',
    };
  }

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1 }));
  };

  sayHello = () => {
    this.setState({ message: 'Hello! Member!' });
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    this.setState({ message });
  };

  handleSyntheticEvent = (event) => {
    this.setState({
      message: `I was clicked using the ${event.type} synthetic event`,
    });
  };

  render() {
    return (
      <section className="card">
        <p className="label">Current counter</p>
        <strong className="counter">{this.state.count}</strong>

        <div className="button-row">
          <button type="button" onClick={this.handleIncrement}>
            Increment
          </button>
          <button type="button" onClick={this.decrement}>
            Decrement
          </button>
          <button type="button" onClick={() => this.sayWelcome('Welcome')}>
            Say Welcome
          </button>
          <button type="button" onClick={this.handleSyntheticEvent}>
            OnPress
          </button>
        </div>

        <p className="event-message" role="status">
          {this.state.message}
        </p>
      </section>
    );
  }
}

export default Counter;
