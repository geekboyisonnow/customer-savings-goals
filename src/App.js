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
        <div>Your Personal Savings Goals</div>
      </header>
      <body>
        <nav>
        <div className="hover" id="nav-bkg">
        CREATE GOALS
        </div>
        <div className="hover" id="nav-bkg">
        MY GOALS
        </div>
        <div className="hover" id="nav-bkg">
        EDIT GOALS
        </div>
        </nav>
        <div>
          <img src={plant} alt="plant planted in change jar"/>
        </div>

      </body>
      <footer>
        The Footer
      </footer>
      </>
      );
  }
}

export default App;
