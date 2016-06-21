class TodoApp extends React.Component {
  getInitialState() {
    return {items: ['Todo item #1', 'Todo item #2']};
  },
  updateItems(newItem) {
    let allItems = this.state.items.concat([newItem]);
    this.setState({
      items: allItems
    });
  },
  render() {
    return (
      <div className="content">
        <TodoBanner/>
        <TodoList items={this.state.items} />
        <TodoForm onFormSubmit={this.updateItems} />
      </div>
    );
  }
}
