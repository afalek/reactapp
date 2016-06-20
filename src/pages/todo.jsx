import React from 'react';
import { connect } from 'react-redux';

class Todolist extends React.Component {
	render() {
		return (
			<div className="wrap">
				<h1>Lista Todo</h1>
			    <ul>
			    	<li>item 1</li>
			    </ul>
			</div>
		);
	}
};

export default connect()(Todolist);