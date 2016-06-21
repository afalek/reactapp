require('normalize.css/normalize.css');
require('styles/sidebar.css');
require('styles/App.css');
//require('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
//require('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css');

import React from 'react';
import Navbar from '../containers/navbar';
import Todo from './todo';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Navbar date={this.props.date} />
        <div className="wrapper">
          <ul className="sidebar">
          	<li><Link to="/">Home</Link></li>
          	<li><Link to="/page1">Update daty</Link></li>
          	<li><Link to="/page2">Zmiana koloru</Link></li>
          	<li><Link to="/todolist">Lista Todo</Link></li>
          </ul>
          <div>
          	{this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
