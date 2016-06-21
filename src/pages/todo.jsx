require ('../styles/todoList.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Todolist extends React.Component {
    render() {
        return (
            <TodoApp/>
        );
    }
};

let TodoBanner = React.createClass({
  render: function(){
    return (
      <h3>TODO List</h3>
    );
  }
});

let TodoList = React.createClass({
  render: function() {
    let createItem = function(itemText) {
      return (
        <TodoListItem>{itemText}</TodoListItem>
      );
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
///////////   DONE TASK
let TodoListItem = React.createClass({
  handleDone: function(e) {
    this.setState({
      done: function() {
        console.log('change change');
      }
    });
    //console.log('change change');
  },
  render: function(){
    return (
      <li onClick={this.handleDone}>ss{this.props.children}</li>
    );
  }
});

let TodoForm = React.createClass({
    getInitialState: function() {
      return {item: ''};
    },
    handleSubmit: function(e){
      e.preventDefault();
      this.props.onFormSubmit(this.state.item);
      this.setState({item: ''});
      return;
    },
    onChange: function(e){
        this.setState({
          item: e.target.value
      });
    },
    render: function(){
      return (
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='item' onChange={this.onChange} value={this.state.item} placeholder="Add todo" />
          <button type='submit'>Add</button>
        </form>
      );
    }
});

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

export default connect()(Todolist);
