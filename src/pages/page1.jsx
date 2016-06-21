require('../styles/Date.css');

import React from 'react';
import RefreshDate from '../components/refresh-date';
import Currentdate from '../components/currentdate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Page1 extends React.Component {
	render() {
		return (
			<div className="wrap">
                <Currentdate date={this.props.date} />
			    <RefreshDate dispatch={this.props.dispatch} />
			</div>
		);
	}
};

export default connect()(Page1);
