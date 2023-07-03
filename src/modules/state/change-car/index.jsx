import React, { Component } from "react";

export default class ChangeCar extends Component {
  state = {
    srcImage: "/images/cars/red-car.jpg",
  };

  changeSrcImage = (src) => {
    return () => {
      this.setState({ srcImage: src });
    };
  };

  render() {
    return (
      <div className="container">
        <img
          style={{
            width: "100%",
          }}
          src={this.state.srcImage}
        />

        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            onClick={this.changeSrcImage("/images/cars/red-car.jpg")}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={this.changeSrcImage("/images/cars/black-car.jpg")}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={this.changeSrcImage("/images/cars/silver-car.jpg")}
            className="btn btn-secondary"
          >
            Silver
          </button>
          <button
            onClick={this.changeSrcImage("/images/cars/steel-car.jpg")}
            className="btn btn-warning"
          >
            Steel
          </button>
        </div>
      </div>
    );
  }
}
