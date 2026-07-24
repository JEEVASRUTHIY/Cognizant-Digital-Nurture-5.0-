import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: 'Euro',
      result: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const amount = Number(this.state.amount);

    if (!Number.isFinite(amount) || amount < 0) {
      this.setState({ result: 'Enter a valid amount.' });
      return;
    }

    const rupees = amount * 80;
    this.setState({
      result: `Converting to Euro Amount is ${rupees}`,
    });
  };

  render() {
    return (
      <section className="card">
        <h2>Currency Convertor</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Amount
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Currency
            <input
              type="text"
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit">Convert</button>
        </form>

        {this.state.result && (
          <p className="conversion-result" role="status">
            {this.state.result}
          </p>
        )}
      </section>
    );
  }
}

export default CurrencyConverter;
