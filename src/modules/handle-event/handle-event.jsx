import React, { Component } from "react";
// rcc
export default class HandleEvent extends Component {
  // không phải thuần method: thuộc tính có giá trị là một function

  // 1. Function Không có tham số truyền vào
  fn1 = () => {
    alert("Click Me 1");
  };

  currying = () => {
    return () => {
      alert("Click Me 3");
    };
  };

  fn4 = (title) => {
    alert(title);
  };

  // gọi function và trả về một function khác: currying
  fn5 = (title) => {
    // closure
    // sử dụng giá trị bên ngoài phạm vi của nó.
    return () => {
      alert(title);
    };
  };

  render() {
    const fn2 = () => {
      alert("Click Me 2");
    };

    return (
      <div>
        {/* onClick: Yêu cầu nhận vào một function */}
        <button onClick={this.fn1}>Click Me</button>

        <button onClick={fn2}>Click Me 2</button>

        {/* Thực thi ngay lập tức method currying */}
        <button onClick={this.currying()}>Click Me 3</button>

        <button
          onClick={() => {
            // inline function
            this.fn4("hihihihihi");
          }}
        >
          Click Me 4
        </button>

        {/* Error: declaration function từ khóa this bị undefined */}
        <button
          onClick={function () {
            // định nghĩa riêng
            console.log(this); // undefined
            // this.fn4("huhu");
          }}
        >
          Click Me 5
        </button>

        <button
          onClick={() => {
            // không có định nghĩa riêng
            console.log(this);
            this.fn4("hhahahaha");
          }}
        >
          Click Me 6
        </button>

        <button onClick={this.fn5("hahaha")}>Click Me 7</button>

        <button onClick={this.fn4.bind(this, "haha")}>Click Me 8</button>
      </div>
    );
  }
}
//  button.onclick =
