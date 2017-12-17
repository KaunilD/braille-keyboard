import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Home from './views/home'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home}>
          </Route>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
