import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  sayHello = () => {
    alert('Hello! You just incremented the value.');
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert(`Welcome Message: ${message}`);
  };

  handleClick = (e) => {
    alert('I was clicked');
    console.log('Synthetic event:', e);
  };

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">React Events Examples</h1>
        </header>
        
        <div className="card-grid">
          <div className="card">
            <h2 className="card-title">Counter Example</h2>
            <div className="counter-value">{this.state.count}</div>
            <div>
              <button className="button button-success" onClick={this.increment}>Increment</button>
              <button className="button button-danger" onClick={this.decrement}>Decrement</button>
            </div>
          </div>
          
          <div className="card">
            <h2 className="card-title">Event Handlers</h2>
            <p>Examples of different event handling techniques in React</p>
            <button 
              className="button button-warning" 
              onClick={() => this.sayWelcome("Welcome to React Events!")}
            >
              Say Welcome
            </button>
            
            <div style={{ margin: "1rem 0" }}></div>
            
            <button 
              className="button" 
              onClick={this.handleClick}
            >
              Click on me
            </button>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="card">
          <CurrencyConvertor />
        </div>
      </div>
    );
  }
}

export default App;
