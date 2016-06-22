import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    render() {
    let createItem = function(itemText) {
      return (
        <TodoListItem>{itemText}</TodoListItem>
      );
    };
    return <ul className="todoList">{this.props.items.map(createItem)}</ul>;
  }
}

export default TodoList;
