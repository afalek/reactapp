require('normalize.css/normalize.css');
require('styles/sidebar.css');
require('styles/App.css');

import React from 'react';
import Navbar from '../containers/navbar';
import Todo from './todo';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index" style={this.props.color}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Navbar date={this.props.date} />
            </div>
            <div className="col-sm-3 voffset">
              <ul className="sidebar">
              	<li><Link to="/">Home</Link></li>
              	<li><Link to="/page1">Update daty</Link></li>
              	<li><Link to="/page2">Zmiana koloru</Link></li>
              	<li><Link to="/todolist">Lista Todo</Link></li>
              </ul>
            </div>
            <div className="col-sm-9 text-center voffset">
              <div>
              	{this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
