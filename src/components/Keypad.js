import React from "react";

class Keypad extends React.Component {
  passEvent = () => {
    console.log("Entering password...");
  };

  render() {
    return <input type="password" onKeyUp={this.passEvent} />;
  }
}

export default Keypad;
