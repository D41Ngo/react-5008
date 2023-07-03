import React, { Component } from "react";

export default class ChangeColorHouse extends Component {
  state = {
    houseColor: "blue",
  };

  changeColor = (color) => {
    this.setState({
      houseColor: color,
    });
  };

  curryingChangeColor = (color) => {
    return () => {
      this.setState({ houseColor: color });
    };
  };

  render() {
    return (
      <div>
        <i
          style={{
            color: this.state.houseColor,
          }}
          className="fa-solid fa-house"
        ></i>

        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            onClick={this.curryingChangeColor("red")}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.changeColor("blue");
            }}
            className="btn btn-secondary"
          >
            Blue
          </button>
          <button
            onClick={() => {
              this.changeColor("green");
            }}
            className="btn btn-success"
          >
            Green
          </button>
          {/* currying function */}
          <button
            onClick={() => {
              this.changeColor("yellow");
            }}
            className="btn btn-warning"
          >
            Yellow
          </button>
        </div>
      </div>
    );
  }
}
