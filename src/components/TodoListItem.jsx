import React from 'react';

class TodoListItem extends React.Component {
  render(){
    return (
      <li>{this.props.children}</li>
    );
  }
}

export default TodoListItem;
