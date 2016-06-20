import React from 'react';
import RefreshDate from '../components/refresh-date';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Page1 extends React.Component {
	render() {
		return (
			<div className="wrap">
				<h1>Update daty</h1>
			        <RefreshDate dispatch={this.props.dispatch} />
			</div>
		);
	}
};

export default connect()(Page1);