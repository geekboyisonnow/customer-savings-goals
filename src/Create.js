import React, { Component } from 'react';
import plant from './plant.jpg'
import arrow from './arrow-button.png'
import './App.css';

class Create extends Component {
  render() {
    return (
    <>
      
        <form action="/new" method="post">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" name="goal_name"/>
            </div>
            <div>
                <label for="target">Target Amount:</label>
                <input type="text" id="target" name="target_amount"/>
            </div>
            <div>
                <label for="current">Current Amount:</label>
                <input type="text" id="current" name="current_amount"/>
            </div>
            <div>
                <label for="date">Target Amount:</label>
                <input type="date" id="date" name="target_date"/>
            </div>
        </form>
      
    </>
      );
  }
}

export default Create;