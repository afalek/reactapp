require ('../styles/todoList.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import TodoBanner from '../components/TodoBanner';
import TodoList from '../components/TodoList';
import TodoListItem from '../components/TodoListItem';
import TodoForm from '../components/TodoForm';
import TodoApp from '../components/TodoApp';

class Todolist extends React.Component {
    render() {
      return (
        <TodoApp/>
      );
    }
};

export default connect()(Todolist);
