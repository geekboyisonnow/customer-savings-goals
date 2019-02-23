import React, { Component } from 'react';
import logo from './bank-ozk-logo.png';
import plant from './plant.jpg'
import arrow from './arrow-button.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <header>
        <img align="bottom" src={logo} className="logo" alt="Bank OZK logo" />
        <div className="mobile">Your Personal Savings Goals</div>
      </header>
      <body>
        <nav>
        <div className="hover" id="nav-bkg">
        Add New Goals
        </div>
        <div className="hover" id="nav-bkg">
        Chart My Progress
        </div>
        <div className="hover" id="nav-bkg">
        The Rainy Day Challenge
        </div>
        </nav>
        <div className="body">
        <div className="plant">
          <img src={plant} alt="plant planted in change jar"/>
        </div>
        <div className="arrow">
          <h1>HERE IS LOREM IPSUM FOR START-UPS</h1>
          
          {/* <img src={arrow} alt="arrow button"/> */}
          
          <blockquote>
          Interaction design user experience long tail business plan stock social proof gamification series A financing scrum project churn rate incubator. Facebook technology first mover advantage gen-z scrum project strategy prototype metrics monetization bootstrapping supply chain innovator return on investment. Business-to-consumer customer hypotheses. Seed money facebook network effects release validation scrum project gen-z rockstar infrastructure iPad niche market.
          </blockquote>
          </div>
        </div>
      </body>
      <footer>
        Kenneth Cannon &copy; 2019
      </footer>
      </>
      );
  }
}

export default App;
