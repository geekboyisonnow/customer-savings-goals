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
        <div className="arrow">
          <h1>HERE IS LOREM IPSUM FOR START-UPS</h1>
          
          {/* <img src={arrow} alt="arrow button"/> */}
          
          <blockquote>
          Interaction design user experience long tail business plan stock social proof gamification series A financing scrum project churn rate incubator. Facebook technology first mover advantage gen-z scrum project strategy prototype metrics monetization bootstrapping supply chain innovator return on investment. Business-to-consumer customer hypotheses. Seed money facebook network effects release validation scrum project gen-z rockstar infrastructure iPad niche market.
          </blockquote>
          </div>
        </div>
      </body>
      </>
      );
  }
}

export default Progress;
