// Code EyesOnMe Component Here
import React from "react";

class EyesOnMe extends React.Component {
  forFocus = () => {
    console.log("Good!");
  };
  forBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button onFocus={this.forFocus} onBlur={this.forBlur}>
        Click Here
      </button>
    );
  }
}

export default EyesOnMe;
