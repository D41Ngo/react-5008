import { Component } from "react";
// rcc: tạo nhanh một class component.

// Đặt tên component phải viết hoa chữ cái đầu, phải đúng với quy ước đặt tên biến.

// để đưa UI lên giao diện, thì chúng ta sẽ để nó trong return của method render.
export default class RccComponent extends Component {
  render() {
    return (
      <div>
        <p>Component Tự Định Nghĩa</p>
        <button className="btn btn-success">Click Me</button>
      </div>
    );
  }
}
