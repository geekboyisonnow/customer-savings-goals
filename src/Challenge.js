import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Challenge extends Component {
  render() {
    return (
        <div className="body">
     
          <h2>The Rainy Day Challenge</h2>
                
          <div className="mobile-column">

<div className="row-flex">
          <label for="name" className="input-label"><strong>Goal:</strong></label>
          
          <label for="target" className="input-label" ><strong>Amount:</strong></label>

          <label for="current" className="input-label" ><strong>Balance:</strong></label>

          <label for="date" className="input-label"><strong>Date:</strong></label>
          <label className="input-label" ><strong>Progress:</strong></label>
          </div>

   
          
            
           
            <div className="row-flex">
            <div type="text" id="name" name="goal_name" className="input-label" >Rainy Day Challenge</div>
            <input type="number" min="0.01" step="0.01" max="" value="$10,000.00" id="target" name="target_amount" className="input-label" placeholder="$10,000.00"/>
            <div type="text" id="current" name="current_amount" className="input-label" >$500.00</div>
            <div type="date" id="date" name="target_date" className="input-label" >01/01/2035</div>
            </div>

            <div className="row-flex">
          <div class="progress-bar horizontal">
              <div class="progress-track" className="input-label" >
                  <div class="progress-fill">
                    <span >10%</span>
                  </div>
              </div>
          </div>
          </div>
          
          <div className="content">
          <div className="buttons">
            <div className="button-column">
            <div class="button" classId="submit" className="button-label">
              <button type="edit"><strong>NEXT PAGE</strong></button>
            </div>
            </div>
            
            <div className="button-column">
            <div class="button" classId="submit" className="button-label">
              <button type="edit"><strong>EDIT GOALS</strong></button>
            </div>
            </div>
            </div>
            </div>
            </div>


</div>

);
  }
}

export default Challenge;