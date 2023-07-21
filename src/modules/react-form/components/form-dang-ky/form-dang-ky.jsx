import React, { Component } from "react";

export default class FormDangKy extends Component {
  /***
   * 1. Lấy giá trị từ input người dùng nhập vào.
   * 2. Validate.
   * 3. Gửi dữ liệu đi.
   */

  state = {
    value: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "",
      desc: "",
    },
    touch: {
      id: false,
      name: false,
      price: false,
      img: false,
      productType: false,
      desc: false,
    },
    error: {
      id: "Id Không được bỏ trống",
      name: "",
      price: "",
      img: "",
      productType: "",
      desc: "",
    },
  };

  handleChange = (event) => {
    // Chú ý: onChange đã custome lại: keydown + keypress !== onchange js
    // hàm sẽ gọi khi người dùng thay đổi giá trị nhập vào input

    // event.target: chinh la input <==> document.getID('id')
    // <=> document.getID('id').value

    const { value, id, name, className } = event.target;

    console.log({ id });
    // const value = event.target.value;
    // const id = event.target.id;

    // giữ giá trị cũ | xét lại giá trị mới. ???
    this.setState({
      value: {
        ...this.state.value,
        [id]: value,
      },
    });

    // property = 'id'
    /**
     * this.setState({
        value: {
            ...this.state.value,
            ['id']: value,
        },
    });
     */
  };

  handleFocus = (event) => {
    const { id } = event.target;

    this.setState({
      touch: {
        ...this.state.touch,
        [id]: true,
      },
    });
  };
  render() {
    console.log(this.state.touch);
    return (
      <form className="g-3">
        <div className="row">
          <div className="col-6">
            <div>
              <label htmlFor="id">ID</label>
              <input
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                value={this.state.value.id}
                type="text"
                className="form-control"
                id="id"
                placeholder=""
              />
              {this.state.touch.id && this.state.error.id && (
                <p className="text-red-500">{this.state.error.id}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="name">Name</label>
              <input
                onFocus={this.handleFocus}
                value={this.state.value.name}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder=""
              />
            </div>
            <div className="mt-3">
              <label htmlFor="price">Price</label>
              <input
                onFocus={this.handleFocus}
                value={this.state.value.price}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="price"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <label htmlFor="img">Image</label>
              <input
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="img"
                placeholder=""
              />
            </div>
            <div className="mt-3">
              <label>Product Type</label>
              <select className="form-select">
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mt-3">
              <label htmlFor="desc">Description</label>
              <input
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="desc"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-success mx-4">Đăng Ký</button>
          <button className="btn btn-success mx-4">Chỉnh Sửa</button>
        </div>
      </form>
    );
  }
}
