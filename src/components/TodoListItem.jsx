require ('../styles/todoList.css');

import React from 'react';
import TodoToggle from './TodoToggle';

class TodoListItem extends React.Component {
  render(){
    return (
      <li>
        <span onClick={this.updateState}>{this.props.children}</span>
        <TodoToggle />
      </li>
    );
  }
}

export default TodoListItem;
