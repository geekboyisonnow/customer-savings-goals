import React, { Component } from 'react';
import logo from './bank-ozk-logo.png';
import plant from './plant.jpg'
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
        VIEW MY GOALS
        </div>
        <div className="hover" id="nav-bkg">
        ADD A NEW GOAL
        </div>
        <div className="hover" id="nav-bkg">
        EDIT GOALS
        </div>
        </nav>
        <div className="body">
        <div className="plant">
          <img src={plant} alt="plant planted in change jar"/>
        </div>
        <div>
          <h1>HERE IS LOREM IPSUM FOR START-UPS</h1>
          <p>
          Interaction design user experience long tail business plan stock social proof gamification series A financing scrum project churn rate incubator. Facebook technology first mover advantage gen-z scrum project strategy prototype metrics monetization bootstrapping supply chain innovator return on investment. Business-to-consumer customer hypotheses. Seed money facebook network effects release validation scrum project gen-z rockstar infrastructure iPad niche market.
          </p>
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
