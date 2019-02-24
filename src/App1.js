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
        <form action="/new" method="post" className="row">
          <div className="column">
            <label for="name" className="label">Name:</label>
            <label for="target" className="label">Amount:</label>
            <label for="current" className="label">Balance:&nbsp;&nbsp;</label>
            <label for="date" className="label">Date:</label>
          </div>
          <div className="column">
            <input type="text" id="name" name="goal_name" className="label"/>
            <input type="text" id="target" name="target_amount" className="label"/>
            <input type="text" id="current" name="current_amount" className="label"/>
            <input type="date" id="date" name="target_date" className="label"/>
          </div>
          <div className="column" classId="submit">
            <div class="button" className="label">
              <button type="submit">Add Name</button>
            </div>
            <div class="button" className="label">
              <button type="submit">Submit</button>
            </div>
            <div class="button" className="label">
              <button type="submit">Enter</button>
            </div>
            <div class="button" className="label">
              <button type="submit">Set Date</button>
            </div>
          </div>
        </form>
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
