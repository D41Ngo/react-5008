import React, { Component } from "react";

export default class TangGiamFontSize extends Component {
  state = {
    fSize: 16,
  };

  render() {
    console.log("re-render");
    return (
      <div>
        <p
          style={{
            fontSize: `${this.state.fSize}px`,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          quaerat animi officiis ad illum quos corporis saepe ut vero laborum!
        </p>
        <button
          onClick={() => {
            const newState = {
              fSize: this.state.fSize + 5,
            };
            // là một cơ chế bất đồng bộ.
            // xem xét coi thử có bao nhiêu state thay đổi, chỉ render lại một lần duy nhất.

            // vì sao setState không phải là cơ chế đồng bộ ?
            this.setState(newState); //1
          }}
          className="btn btn-success mx-2"
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 5,
            });
          }}
          className="btn btn-success"
        >
          -
        </button>
      </div>
    );
  }
}
