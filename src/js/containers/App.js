import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Navbar from 'components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {}
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/portfolio'} component={Portfolio} />
      </div>
    );
  }
}

export default App
