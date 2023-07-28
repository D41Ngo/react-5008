import React, { Component } from "react";
import { Child } from "./components/child";

/**
 * Vòng đời component: 3 giai đoạn.
 * - Mounting: Đưa component lên trên giao diên.
 * - Updating: Khi component re-render.
 * - Un-mounting: Component bị xóa khỏi giao diện, không còn thấy trên DOM.
 */

export default class LifeCycle extends Component {
  constructor() {
    super();

    console.log("[[parent]] constructor");

    this.state = {
      show: false,
      count: 0,
      like: 0,
    };
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("[[parent]] getDerivedStateFromProps");

    // cập nhật lại state của component, trước khi đưa lên giao diện, không phải giống như this.setState
    //this.setState: đang cập nhật lại state và re-render lại component

    // null: không có cập nhật gì cả.
    return null;

    // cập nhật lại state - show

    // return {
    //   show: true,
    // };
  }

  shouldComponentUpdate() {
    console.log("[[parent]] shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("[[parent]] render");

    return (
      <div className="p-[50px] bg-green-600">
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count: {this.state.count}
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
        >
          like: {this.state.like}
        </button>

        <button
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
          id="btn"
        >
          Show
        </button>
        {this.state.show && <Child />}
      </div>
    );
  }

  componentDidMount() {
    console.log(document.getElementById("btn"));

    console.log("[[parent]] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[[parent]] componentDidUpdate");
  }
}
