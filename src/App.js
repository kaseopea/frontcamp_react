import React, { Component } from 'react';
import './App.css';

import {PLIPMOCK} from './mocks/plipsMock';

import AddPlip from './components/AddPlip';
import PlipsList from './components/PlipsList';
import PlipAuthorFilter from './components/PlipAuthorFilter';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      plips: []
    }

  }

  componentWillMount() {
    // Add mock data
    this.setState({
      plips: PLIPMOCK
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Plip-Plop</h1>
          <p className="app-desc">Welcome to Plip-Plop</p>
        </header>
        
        <AddPlip />
        <PlipsList plips={this.state.plips} />
        <PlipAuthorFilter />
        
        <footer className="app-footer">
          Plip-Plop&copy; 2018. No rights, nothing to reserve.
        </footer>
      </div>
    );
  }
}

export default App;
