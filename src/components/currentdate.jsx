import React from 'react';
import RefreshDate from '../components/refresh-date';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Currentdate extends React.Component {
    render() {
        return (
            <div className="wrap">
                <div>{this.props.date}</div>
            </div>
        );
    }
};

export default Currentdate;
