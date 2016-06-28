require('../styles/changeColor.css');

import React from 'react';

class Page2 extends React.Component {
	constructor() {
		super();
		this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
		//this.handleColor = this.handleColor.bind(this);
	}

	findDomNodeHandler() {
		let bgColor = document.querySelector('.bgcolor').value;
		document.body.style.backgroundColor = bgColor;
	}

    // handleColor(title) {
    //     this.props.dispatch(changeBgColor(color));
    // }

	render() {
		return (
			<div className="content">
				<input className="bgcolor" type="text" placeholder="#hex" />
				<button onClick={this.findDomNodeHandler} onEnter={this.findDomNodeHandler}>Change Color</button>
			</div>
		);
	}
}

export default Page2;
