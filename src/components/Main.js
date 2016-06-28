require('normalize.css/normalize.css');
require('styles/sidebar.css');
require('styles/App.css');

import React from 'react';
import Navbar from '../containers/navbar';
import Sidebar from './sidebar';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="navbar navbar-default">
                <Navbar date={this.props.date} />
              </div>
            </div>
            <div className="col-sm-3 voffset">
              <div className="panel">
                <Sidebar />
              </div>
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
