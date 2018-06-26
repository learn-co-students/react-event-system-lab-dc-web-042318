// Code Keypad Component Here

import React from "react";

class Keypad extends React.Component {
	constructor(props) {
		super(props);
		this.consoleLog = this.consoleLog.bind(this);
	}

	consoleLog() {
		console.log("Entering password...");
	}

	render() {
		return (
			<div>
				<input type="password" onKeyUp={this.consoleLog} />
			</div>
		);
	}
}

export default Keypad;
