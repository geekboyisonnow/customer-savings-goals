import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Header from './Header';

import Footer from './Footer';
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
        Add New Goals
        </div>
        <div className="hover" id="nav-bkg">
        Edit My Goals
        </div>
        <div className="hover" id="nav-bkg">
        Chart My Progress
        </div>
        <div className="hover" id="nav-bkg">
        The Rainy Day Challenge
        </div>
        </nav>
        <div className="rainy-content">
          <h1>The Rainy Day Challenge</h1>
          <blockquote><p>Competition can be healthy.  So, try the Rainy Day Challenge.  Here's how it works... You pick a savings goal that you might need for a rainy day, such as; $100, $1,000, $10,000, or more.  Match your progress against others in the challenge.  See if you can beat expectations.  Are you ready for the Challenge?  Bank OZK helps you save today to meet your financial goals for tomorrow!</p></blockquote>
        </div>
        <div className="content">
        <div className="row" id="progress">
          <div className="column">
          <label for="name" className="label"><strong>Your Goal:</strong></label>
            <div>
            <div type="text" id="name" name="goal_name" className="label">The Rainy Day Challenge</div>
            </div>
          </div>
          <div className="input-column">
            <label for="target" className="label"><strong>Goal Amount:</strong></label>
            <div>
            <input type="number" min="0.01" step="0.01" max="" value="$10,000.00" id="target" name="target_amount" className="label" placeholder="$10,000.00"/>
            </div>
          </div>
          <div className="input-column">
            <label for="current" className="label"><strong>Current Balance:</strong></label>
            <div>
            <input type="number" min="0.01" step="0.01" max="" value="$300.00" id="current" name="current_amount" className="label" placeholder="$300.00"/>
            </div>
          </div>
          <div className="column">
            <label for="date" className="label"><strong>Due Date:</strong></label>
            <div>
            <div type="date" id="date" name="target_date" className="label">01/01/2020</div>
            </div>
          </div>
          </div>
          <div className="content">
          <div className="buttons">
            <div className="button-column">
            <div class="button" classId="submit" className="label">
              <button type="edit"><strong>EDIT GOAL</strong></button>
            </div>
            <section>Edit This Goal</section>
            </div>
            <div className="button-column">
            <div class="button" classId="submit" className="label">
              <button type="edit"><strong>MY GOALS</strong></button>
            </div>
            <section>All Goals</section>
            </div>
            <div className="button-column">
            <div class="button" classId="submit" className="label">
              <button type="edit"><strong>NEW GOALS</strong></button>
            </div>
            <section>Add Goals</section>
            </div>
            </div>
          </div>
        
        </div>
      </body>
    </>
      );
  }
}

export default App;