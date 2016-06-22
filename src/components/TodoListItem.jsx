require ('../styles/todoList.css');

import React from 'react';

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);
      this.updateState = this.updateState.bind(this);
    };

    updateState() {
      this.setState({
        line: {
            textDecoration: "line-through"
        }
      })
    }

  render(){
    return (
      <li onClick = {this.updateState} style={this.state.line}>{this.props.children}
      </li>
    );
  }
}

export default TodoListItem;
