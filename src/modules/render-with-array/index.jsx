import React, { Component, Fragment } from "react";

const listProduct = [
  { id: 1, name: "Black Car", price: "99$", img: "/images/cars/black-car.jpg" },
  { id: 2, name: "Red Car", price: "100$", img: "/images/cars/red-car.jpg" },
  {
    id: 3,
    name: "Silver Car",
    price: "123$",
    img: "/images/cars/silver-car.jpg",
  },
  {
    id: 4,
    name: "Steel Car",
    price: "322$",
    img: "/images/cars/steel-car.jpg",
  },
];

export default class RenderWithArray extends Component {
  renderListCar = () => {
    const result = listProduct.map((item, index) => {
      // mỗi phần tử của array nên có một key
      // giá trị của key là duy nhất
      // key phải được đặt ở thẻ bao bọc ngoài cùng.

      // giúp react xác định được đâu là phần tử thay đổi, cần vẽ lại trên giao diện.
      // xác định dựa vào key.

      // Có thể tạm sử dụng index làm key nếu như item không có một property nào đặc biệt.
      return (
        <tr key={item.id || index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <img
              style={{
                width: 200, // => 200px
              }}
              src={item.img}
            />
          </td>
        </tr>
      );
    });
    // không cần chuyển về string
    // react cho phép chúng ta binding trực tiếp array
    return result;
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{this.renderListCar()}</tbody>
        </table>
      </div>
    );
  }
}
