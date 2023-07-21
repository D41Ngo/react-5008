import React, { Component } from "react";

export default class ListProduct extends Component {
  render() {
    return (
      <table className="table mt-10">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Product Type</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Iphone 14</td>
            <td>$10</td>
            <td>
              <img
                className="w-[50px] h-[50px]"
                src={"https://i.pravatar.cc?img=65"}
              />
            </td>
            <td>Phone</td>
            <td>Lorem ipsum dolor sit amet.</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
