import React, { Component, Fragment } from "react";

export default class BindingData extends Component {
  course = "ReactJs"; // thuộc tính

  showTitle() {
    // method
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi.";
  }

  render() {
    const cyber = "Cyber Soft"; // biến

    const showName = () => {
      return "Nguyen Van A";
    };

    // {}: binding-data, đưa biến, property, kết quả sau khi gọi method, hay là function lên trên giao diện.

    // Chú Ý: Không sử dụng kiểu dữ liệu: boolean, null, undefined để binding-data.
    // - Binding data sẽ không nhận những kiểu dữ liệu như trên.

    // return phaỉ có một thẻ ngoài bao bọc: div, Fragment, <></>
    // Không được return về 2 thẻ cùng cấp.

    // h1, div: element,
    // BindingData: component

    // JSX: element | component | string | number
    return (
      <>
        <div>
          {<h1>haha</h1>}
          {JSON.stringify({ a: 1 })}
          {JSON.stringify([1, 2, 3, 4])}

          <br />
          <p>Hôm nay học: {this.course}</p>
          <p>Tại: {cyber}</p>
          <br />
          <p>{this.showTitle()}</p>
          <p>{showName()}</p>
        </div>
      </>
    );
  }
}
