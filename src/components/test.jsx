import React from 'react';
import RefreshDate from '../components/refresh-date';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Test extends React.Component {
	render() {
		return (
			<div className="wrap">
				<h1>Navbar: </h1>
				<div>Date: {this.props.date}</div>
			</div>
		);
	}
};

export default Test;