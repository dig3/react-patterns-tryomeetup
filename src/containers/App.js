import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React Patterns TryoMeetup</h2>
        </div>
        <div className="ui container">
          <div className="ui secondary pointing five item menu">
            <IndexLink className="item" activeClassName="active" to="/">Home</IndexLink>
            <Link className="item" activeClassName="active" to="/blackbox-list">
              BlackBoxList
            </Link>
            <Link className="item" activeClassName="active" to="/children-list">
              ChildrenList
            </Link>
            <Link className="item" activeClassName="active" to="/function-as-children-list">
              FunctionAsChildrenList
            </Link>
            <Link className="item" activeClassName="active" to="/best-list">
              BestList
            </Link>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
