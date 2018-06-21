import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import Portfolio from './components/Portfolio'
import PortfolioList from './components/PortfolioList'

class App extends Component {
  state = {
    portfolios: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/portfolios")
      .then(response => {
        const newPortfolios = response.data.portfolios.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        const newState = Object.assign({}, this.state, {
          portfolios: newPortfolios
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <PortfolioList portfolios={this.state.portfolios}/>
      </div>
    );
  }
}

export default App;
