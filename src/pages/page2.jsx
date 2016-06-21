require('../styles/changeColor.css');

import React from 'react';
import ReactDOM from 'react-dom';
import {changeBgColor} from '../actions/bgcolor';

class Page2 extends React.Component {
	constructor() {
		super();
		//this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
		this.handleColor = this.handleColor.bind(this);
	};

	// findDomNodeHandler() {
	// 	let bgColor = document.querySelector('.bgcolor').value;
	// 	document.body.style.backgroundColor = bgColor;
	// }

    handleColor(color) {
        this.props.dispatch(changeBgColor(color));
    }

	render() {
		return ( onEnter={()=>this.handleEnter('Update daty')}
			<div className="content">
				<input className="bgcolor" type="text" placeholder="#hex" />
				<button onClick={()=>this.handleColor()} onEnter={()=>this.handleColor()}>Change Color</button>
			</div>
		);
	}
};

export default Page2;
