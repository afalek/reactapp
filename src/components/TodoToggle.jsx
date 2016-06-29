require ('../styles/todoList.css');

import React from 'react';

// class TodoToggle extends React.Component {
//   getInitialState() {
//     return { showResults: false }
//   },
//   onClick() {
//     this.setState({ showResults: true })
//   },
//   render() {
//     return (
//       <div>
//         <input type="submit" value="Search" onClick={this.onClick} />
//         { this.state.showResults ? <Results /> : null }
//       </div>
//     );
//   }
// }

// class Result extends React.Component {
//   render() {
//     return (
//       <div id="results" className="search-results">
//         Some Results
//       </div>
//     );
//   }
// }


let TodoToggle = React.createClass({
  getInitialState: function() {
    return { showResults: false };
  },
  onClick: function() {
    this.setState({ showResults: true });
  },
  onToggleClick: function() {
    this.setState({ showResults: false });
  },
  render() {
    return (
      <span className="task">
        <span onClick={this.onClick} className="glyphicon glyphicon-ok pull-right"></span>
        <span onClick={this.onToggleClick} className="glyphicon glyphicon-remove pull-right"></span>
        { this.state.showResults ? <Results /> : <div className="new">New</div> }
      </span>
    );
  }
});

class Results extends React.Component {
  render() {
    return (
      <div id="results" className="search-results">
        Done
      </div>
    );
  }
}

// let Results = React.createClass({
//   render() {
//     return (
//       <div id="results" className="search-results">
//         Done
//       </div>
//     );
//   }
// });


export default TodoToggle;



