import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './bank-ozk-logo.png';
import './App.css';

class Header extends Component {
  render() {
    return (
      <Router>
      <header>
      <Link to="/" className="plain">
        <img align="bottom" src={logo} className="logo" alt="Bank OZK logo" />
        </Link>
        <div className="mobile">Your Personal Savings Goals</div>
      </header>
      </Router>
      );
  }
}

export default Header;
