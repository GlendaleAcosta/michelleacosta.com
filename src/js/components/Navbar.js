import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/LOGO-1.jpg';
import 'styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to={'/'} className="navbar-home">
          <img className="logo" src={logo} alt="logo" />
          MICHELLE DEARDORFF
        </Link>
        <p className="navbar-home">m.a.deardorff.01@gmail.com</p>
      </div>
    );
  }
}

export default Navbar;