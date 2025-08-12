import React, { Component } from 'react';
import './App.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: 'dollar',
      converted: '',
      rates: {
        dollar: 0.012, // 1 INR ≈ 0.012 USD
        euro: 0.011,   // 1 INR ≈ 0.011 EUR
        pound: 0.0095  // 1 INR ≈ 0.0095 GBP
      },
      currencySymbols: {
        dollar: '$',
        euro: '€',
        pound: '£'
      }
    };
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleConvert = () => {
    const { amount, currency, rates } = this.state;
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      const converted = value * rates[currency];
      this.setState({ converted: converted.toFixed(2) });
    } else {
      this.setState({ converted: '' });
    }
  };

  render() {
    const { amount, currency, converted, currencySymbols } = this.state;
    const currencyName = currency.charAt(0).toUpperCase() + currency.slice(1);

    return (
      <div>
        <h2 className="card-title">Currency Convertor</h2>
        <p>Convert Indian Rupees (INR) to other currencies</p>
        
        <div className="input-group">
          <label htmlFor="amount">Amount in INR (₹)</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount in INR"
            value={amount}
            onChange={this.handleAmountChange}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="currency">Convert to</label>
          <select 
            id="currency" 
            value={currency} 
            onChange={this.handleCurrencyChange}
          >
            <option value="dollar">US Dollar (USD)</option>
            <option value="euro">Euro (EUR)</option>
            <option value="pound">British Pound (GBP)</option>
          </select>
        </div>
        
        <button 
          className="button button-success" 
          onClick={this.handleConvert}
        >
          Convert
        </button>

        {converted && (
          <div className="result">
            <h3>Conversion Result</h3>
            <p>
              ₹{amount} = {currencySymbols[currency]}{converted} {currencyName}
            </p>
            <p><small>Based on approximate exchange rates</small></p>
          </div>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
