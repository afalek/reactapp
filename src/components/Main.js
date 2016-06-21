require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navbar from '../containers/navbar';
import Todo from './todo';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Navbar  />

   		<h2>Sidebar: </h2>
        <ul>
        	<li><Link to="/">Home</Link></li>
        	<li><Link to="/page1">Update daty</Link></li>
        	<li><Link to="/page2">Zmiana koloru</Link></li>
        	<li><Link to="/todolist">Lista Todo</Link></li>
        </ul>
        <div>
        	{this.props.children}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
