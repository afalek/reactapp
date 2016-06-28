import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  render() {
    return(
      <ul className="sidebar">
        <li><Link to="/"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
        <li><Link to="/page1"><span className="glyphicon glyphicon-calendar"></span> Update daty</Link></li>
        <li><Link to="/page2"><span className="glyphicon glyphicon-pencil"></span> Zmiana koloru</Link></li>
        <li><Link to="/todolist"><span className="glyphicon glyphicon-list-alt"></span> Lista Todo</Link></li>
      </ul>
    )
  }
}

export default Sidebar;
