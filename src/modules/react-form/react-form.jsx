import React, { Component } from "react";
import FormDangKy from "./components/form-dang-ky/form-dang-ky";
import ListProduct from "./components/list-product/list-product";

// export :::: tên
export class ReactForm extends Component {
  render() {
    // text-[mau tu chon].
    // text-white: màu tailwind xây dựng sẵn.
    return (
      <div className="container">
        {/* <h1 className="bg-red-600 flex text-[#67bc4e]">
          Lorem ipsum dolor sit amet.
        </h1>
        <h2 className="bg-red-600 text-white">Lorem ipsum dolor sit amet.</h2>
        <h3 className="bg-red-600">Lorem ipsum dolor sit amet.</h3> */}
        <FormDangKy />
        <ListProduct />
      </div>
    );
  }
}
