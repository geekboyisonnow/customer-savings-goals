import React, { Component } from 'react';
import logo from './bank-ozk-logo.png';
import './App.css';

class Edit extends Component {
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
          <p>Bank OZK helps you save today to meet your financial goals for tomorrow.</p>
        
        <div className="row" id="progress">
          <div className="input-column">
            <label for="name" className="label"><strong>Your Goal Name:</strong></label>
            
            <input type="text" id="name" name="goal_name" className="label" placeholder="Kid's College Fund"/>
            <input type="text" id="name" name="goal_name" className="label" placeholder="Holiday Gifts"/>
            <input type="text" id="name" name="goal_name" className="label" placeholder="Vacation"/>
            <input type="text" id="name" name="goal_name" className="label" placeholder="New Kitchen"/>
            <input type="text" id="name" name="goal_name" className="label" placeholder="Retirement"/>
            
          </div>
          <div className="input-column">
            <label for="name" className="label"><strong>Goal Amount:</strong></label>
            
            <input type="number" min="0.01" step="0.01" max="" value="$100,000.00" id="target" name="target_amount" className="label" placeholder="$100,000.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$2,000.00" id="target" name="target_amount" className="label" placeholder="$2,000.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$1,000.00" id="target" name="target_amount" className="label" placeholder="$1,000.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$10,000.00" id="target" name="target_amount" className="label" placeholder="$10,000.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$4,000,000.00" id="target" name="target_amount" className="label" placeholder="$4,000,000.00"/>
            
          </div>
          <div className="input-column">
            <label for="name" className="label"><strong>Current Balance:</strong></label>
            
            <input type="number" min="0.01" step="0.01" max="" value="$9,500.00" id="current" name="current_amount" className="label" placeholder="$9,500.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$500.00" id="current" name="current_amount" className="label" placeholder="$500.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$100.00" id="current" name="current_amount" className="label" placeholder="$100.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$300.00" id="current" name="current_amount" className="label" placeholder="$300.00"/>
            <input type="number" min="0.01" step="0.01" max="" value="$45,000.00" id="current" name="current_amount" className="label" placeholder="$45,000.00"/>
            
          </div>
          
          <div className="input-column">
            <label for="date" className="label"><strong>Target Date:</strong></label>
            
            <input type="date" id="date" name="target_date" className="label" 
       value="01/01/2035"
       min="01/01/2019" max="01/01/9999" placeholder="01/01/2035"/>
            <input type="date" id="date" name="target_date" className="label" 
       value="10/01/2019"
       min="01/01/2019" max="01/01/9999" placeholder="10/01/2019"/>
            <input type="date" id="date" name="target_date" className="label" 
       value="05/01/2019"
       min="01/01/2019" max="01/01/9999" placeholder="05/01/2019"/>
            <input type="date" id="date" name="target_date" className="label" 
       value="01/01/2020"
       min="01/01/2019" max="01/01/9999" placeholder="01/01/2020"/>
            <input type="date" id="date" name="target_date" className="label" 
       value="06/01/2050"
       min="01/01/2019" max="01/01/9999" placeholder="06/01/2050"/>
           
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

export default Edit;