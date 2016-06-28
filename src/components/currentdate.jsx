import React from 'react';

class Currentdate extends React.Component {
    render() {
        return (
            <div className="wrap">
                <div>{this.props.date}</div>
            </div>
        );
    }
}

export default Currentdate;
