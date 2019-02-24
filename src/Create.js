import React, { Component } from 'react';
import logo from './bank-ozk-logo.png';
import './App.css';

class Create extends Component {
  render() {
    return (
    <>
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
      
    </>
      );
  }
}

export default Create;