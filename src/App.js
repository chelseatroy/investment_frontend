import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contact from './components/Contact'
import ContactList from './components/ContactList'

const contacts = [
  {id: 1, name: "Barney the Dinosaur"},
  {id: 2, name: "Patte Labelle"},
  {id: 3, name: "The Resistance"},
  {id: 4, name: "Andrew Mcfarland"}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ContactList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
