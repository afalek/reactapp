import React from 'react';
import TodoBanner from './TodoBanner';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

let TodoApp = React.createClass({
  getInitialState: function() {
    return {items: ['Todo item #1', 'Todo item #2']};
  },
  updateItems: function(newItem) {
    let allItems = this.state.items.concat([newItem]);
    this.setState({
        items: allItems
    });
  },
  render: function() {
    return (
        <div className="content">
            <TodoBanner/>
            <TodoList items={this.state.items} />
            <TodoForm onFormSubmit={this.updateItems} />
        </div>
    );
  }
});

export default TodoApp;
