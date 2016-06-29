import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {item: ''};
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
    return;
  }
  onChange(e){
    this.setState({
      item: e.target.value
    });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='item' onChange={this.onChange} value={this.state.item} placeholder="Add todo" />
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default TodoForm;
