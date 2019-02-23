import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
  render() {
    return (
      <>
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
      </>
      );
  }
}

export default Navigation;
