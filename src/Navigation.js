import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Create from './Create'
import Edit from './Edit'
import Home from './'
import Challenge from './Challenge'
import Progress from './Progress'
import './App.css';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.props = {
      new: './create',
      edit: './edit',
      home: './',
      progress: './progress'
    }
    
  }
  render() {
    return (
      <Router>
        <nav>
        <div className="hover" id="nav-bkg">
        <Link to="/create" className="plain">Add New Goals</Link>
        </div>
        <div className="hover" id="nav-bkg">
        <Link to="/edit" className="plain">Edit My Goals</Link>
        </div>
        <div className="hover" id="nav-bkg">
        <Link to="/progress" className="plain">Chart My Progress</Link>
        </div>
        <div className="hover" id="nav-bkg">
        <Link to="/challenge" className="plain">The Rainy Day Challenge</Link>
        </div>
        </nav>
      </Router>
      );
  }
}

export default Navigation;
