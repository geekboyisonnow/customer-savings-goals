import React, { Component } from 'react';
import logo from './bank-ozk-logo.png';
import './App.css';

class Progress extends Component {
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
        <div className="content">
          <h1>Your Savings Goals</h1>
          <section>Bank OZK helps you save today to meet your financial goals for tomorrow.</section>
        
        <div className="row" id="progress">
          <div className="column">
          <label for="name" className="label"><strong>Your Goal Name:</strong></label>
            <div>
            <div type="text" id="name" name="goal_name" className="label">Kid's College Fund</div>
            </div>
          </div>
          <div className="item-column">
            <label for="target" className="label"><strong>Amount:</strong></label>
            <div>
            <div type="text" id="target" name="target_amount" className="label">$100,000.00</div>
            </div>
          </div>
          <div className="item-column">
            <label for="current" className="label"><strong>Balance:</strong></label>
            <div>
            <div type="text" id="current" name="current_amount" className="label">$9,500.00</div>
            </div>
          </div>
          <div className="item-column">
            <label for="date" className="label"><strong>Date:</strong></label>
            <div>
            <div type="date" id="date" name="target_date" className="label">01/01/2035</div>
            </div>
          </div>
          </div>
          <div className="content">
          <div className="buttons">
            <div className="button-column">
            <div class="button" classId="submit" className="label">
              <button type="edit"><strong>NEXT PAGE</strong></button>
            </div>
            <section>More Goals</section>
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

export default Progress;
