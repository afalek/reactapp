import React from 'react';
import { refreshDate } from '../actions/const';

class Refresh extends React.Component {
    constructor(props){
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick(){
        this.props.dispatch(refreshDate((new Date()).toString()));
    }
    render() {
        return (
            <div className="content">
                <button onClick={this._handleClick}>Refresh date</button>
            </div>
        );
    }
}

export default Refresh;
