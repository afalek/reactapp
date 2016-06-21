import React from 'react';

class TodoList extends React.Component {
    render() {
    let createItem = function(itemText) {
      return (
        <TodoListItem>{itemText}</TodoListItem>
      );
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

export default TodoList;
