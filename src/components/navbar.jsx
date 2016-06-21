import React from 'react';
import RefreshDate from '../components/refresh-date';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Navbar extends React.Component {
	render() {

		return (
			<div className="wrap">
				<h1>Navbar: {this.props.title}</h1>
				<div>Date: {this.props.date}</div>
			</div>
		);
	}
};

export default Navbar;
