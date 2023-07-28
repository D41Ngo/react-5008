import { Component, PureComponent } from "react";

export class Child extends PureComponent {
  constructor() {
    super();

    console.log("[[child]] constructor");

    this.state = {
      a: 20,
    };
  }

  static getDerivedStateFromProps() {
    console.log("[[child]] getDerivedStateFromProps");

    return null;
  }

  //   shouldComponentUpdate(newProps, newState) {
  //     console.log("[[child]] shouldComponentUpdate");

  //     console.log({ props: this.props, newProps: newProps });

  //     // thường dùng dk để quyết định xem component có nên được re-render hay không.
  //     if (this.props.count === newProps.count) {
  //       return false;
  //     }

  //     return true;
  //   }

  render() {
    console.log("[[child]] render");

    return (
      <div className="h-[100px] bg-blue-600 text-white p-4">
        child
        <p>count: {this.props.count}</p>
      </div>
    );
  }

  idInterval = null;

  componentDidMount() {
    // gọi api -> fetch data render lên giao diện.

    console.log("[[child]] componentDidMount");

    this.idInterval = setInterval(() => {
      console.log("[[child]] time-out");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("[[child]] componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);

    console.log("[[child]] componentWillUnmount");
  }
}
