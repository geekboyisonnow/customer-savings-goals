import React, { Component } from 'react';
import logo from './bank-ozk-logo.png';
import './App.css';

class Header extends Component {
  render() {
    return (
      <>
      <header>
        <img align="bottom" src={logo} className="logo" alt="Bank OZK logo" />
        <div className="mobile">Your Personal Savings Goals</div>
      </header>
      </>
      );
  }
}

export default Header;
