import React from 'react';
import ReactDOM from 'react-dom';

class Page2 extends React.Component {
	constructor() {
		super();
		this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
	};

	findDomNodeHandler() {
		let bgColor = document.querySelector('.bgcolor').value;
		ReactDOM.findDOMNode(app).style.backgroundColor = bgColor;
	}

	render() {
		return (
			<div>
				<input className="bgcolor" type="text" placeholder="#hex" />
				<button onClick={this.findDomNodeHandler}>Change Color</button>
			</div>
		);
	}
};

export default Page2;

