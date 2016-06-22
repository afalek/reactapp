import React from 'react';
import { PropTypes } from 'react';

// class Todo extends React.Component {
// 	render() {
// 		return (
// 			<div className="todo">
// 				Todo list 123
// 			</div>
// 		);
// 	}
// };

const Todo = ({ onClick, completed, text }) => (
	<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
		{text}
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo;