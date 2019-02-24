import React, { Component } from 'react';
import plant from './plant.jpg'
import arrow from './arrow-button.png'
import './App.css';

class Progress extends Component {
  render() {
    return (
      <>
      <body>
        <div className="body">
        <div className="plant">
          <img src={plant} alt="plant planted in change jar"/>
        </div>
        <div className="row">
          <div className="row">
            <label for="name" className="label">Name:</label>
            <label for="target" className="label">Amount:</label>
            <label for="current" className="label">Balance:&nbsp;&nbsp;</label>
            <label for="date" className="label">Date:</label>
          </div>
          <div className="row">
            <div type="text" id="name" name="goal_name" className="label"></div>
            <div type="text" id="target" name="target_amount" className="label"></div>
            <div type="text" id="current" name="current_amount" className="label"></div>
            <div type="date" id="date" name="target_date" className="label"></div>
          </div>
          <div className="row" classId="submit">
            <div class="button" className="label">
              <button type="edit">Edit</button>
            </div>
            <div class="button" className="label">
              <button type="edit">Edit</button>
            </div>
            <div class="button" className="label">
              <button type="edit">Edit</button>
            </div>
            <div class="button" className="label">
              <button type="edit">Edit</button>
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
