require ('../styles/todoList.css');

import React from 'react';
import TodoToggle from './TodoToggle';

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);
      this.updateState = this.updateState.bind(this);
    }

    updateState() {
      this.setState({
        line: {
          textDecoration: 'line-through'
        },
        noline: {
          textDecoration: 'underline'
        }
      })
    }

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
