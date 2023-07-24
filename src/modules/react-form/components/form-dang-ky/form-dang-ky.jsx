import React, { Component } from "react";
import { connect } from "react-redux";
import { dangKySPCreator } from "../../../../redux/react-form/react-form.action";
const MAPPER = {
  id: "Id",
  name: "Name",
  price: "Price",
  productType: "Product type",
  desc: "Description",
  img: "Image",
};

class FormDangKy extends Component {
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
      id: "",
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

    // const value = event.target.value;
    // const id = event.target.id;

    // giữ giá trị cũ | xét lại giá trị mới. ???

    // validate
    /**
     * id: không được bỏ trống và phải là số.
     */
    let newError = {};
    for (const key in this.state.touch) {
      // this.state.touch[key]: lấy giá trị của thuộc tính
      if (this.state.touch[key]) {
        // Điều kiện: Không được bỏ trống.
        // this.state.value[key]: đang validate giá trị cũ trước đó của state.
        const __value = key === id ? value : this.state.value[key];

        switch (key) {
          case "id": {
            if (/^\d*$/.test(__value) === false) {
              newError[key] = "Id phải là số.";
            }
            break;
          }
          case "img": {
            const regexURL =
              /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
            if (regexURL.test(__value) === false) {
              newError[key] = "Đường dẫn không hợp lệ.";
            }
            break;
          }
          case "price": {
            if (/^\d*$/.test(__value) === false) {
              newError[key] = "Price không hợp lệ.";
            }
            break;
          }

          case "desc": {
            if (__value.length > 50) {
              newError[key] = "Description quá dài. Chỉ cho phép 50 ký tự.";
            }
            break;
          }
          default: {
            break;
          }
        }

        if (__value.length === 0) {
          newError[key] = MAPPER[key] + " không được bỏ trống";
        }

        // if (key === id) {
        //   if (value.length === 0) {
        //     newError[key] = key + " không được bỏ trống";
        //   }
        // } else {
        //   if (this.state.value[key].length === 0) {
        //     newError[key] = key + " không được bỏ trống";
        //   }
        // }
      }
    }

    this.setState({
      // ...this.state, không cần thiết, vì nó sẽ tự động merge lại giúp chúng ta.

      value: {
        ...this.state.value,
        [id]: value,
      },
      error: newError,
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

  handleSubmit = (event) => {
    event.preventDefault();

    for (const key in this.state.value) {
      // phải được nhập đầy đủ.
      if (this.state.value[key].length === 0) {
        // thoát khỏi function không cho submit nữa
        return;
      }

      // không còn dòng báo lỗi nào.
      // if (this.state.error[key] && this.state.error[key].length > 0) {

      // option chaining
      if (this.state.error[key]?.length > 0) {
        alert(this.state.error[key]);
        // thoát khỏi function không cho submit nữa
        return;
      }
    }

    console.log("submit", this.state.value);

    this.props.dispatch(dangKySPCreator(this.state.value));

    this.setState({
      value: {
        id: "",
        name: "",
        price: "",
        img: "",
        productType: "",
        desc: "",
      },
    });
  };
  render() {
    console.log(this.props.spChinhSua);

    /**
     * Mong muốn: khi nào có spChinhSua thì mình sẽ cập nhật lại state.value = spChinhSua.
     *
     * -------------- pending ----------------
     * Life cycle
     */
    return (
      <form onSubmit={this.handleSubmit} className="g-3">
        <div className="row">
          <div className="col-6">
            <div>
              <label htmlFor="id">ID</label>
              <input
                name="Id"
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
                name="Name"
                onFocus={this.handleFocus}
                value={this.state.value.name}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder=""
              />
              {this.state.touch.name && this.state.error.name && (
                <p className="text-red-500">{this.state.error.name}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="price">Price</label>
              <input
                name="Price"
                onFocus={this.handleFocus}
                value={this.state.value.price}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="price"
                placeholder=""
              />
              {this.state.touch.price && this.state.error.price && (
                <p className="text-red-500">{this.state.error.price}</p>
              )}
            </div>
          </div>
          <div className="col-6">
            <div>
              <label htmlFor="img">Image</label>
              <input
                name="Image"
                value={this.state.value.img}
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="img"
                placeholder=""
              />
              {this.state.touch.img && this.state.error.img && (
                <p className="text-red-500">{this.state.error.img}</p>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="productType">Product Type</label>
              <select
                id="productType"
                name="Product type"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                value={this.state.value.productType}
                className="form-select"
              >
                <option value={""} selected>
                  Select
                </option>
                <option value="Phone">Phone</option>
                <option value="Tablet">Tablet</option>
                <option value="Laptop">Laptop</option>
              </select>

              {this.state.touch.productType && this.state.error.productType && (
                <p className="text-red-500">{this.state.error.productType}</p>
              )}
            </div>

            <div className="mt-3">
              <label htmlFor="desc">Description</label>
              <input
                name="Description"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="desc"
                placeholder=""
                value={this.state.value.desc}
              />
              {this.state.touch.desc && this.state.error.desc && (
                <p className="text-red-500">{this.state.error.desc}</p>
              )}
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

const mapStateToProps = (rootReducer) => {
  return {
    spChinhSua: rootReducer.reactFormReducer.spChinhSua,
  };
};

export default connect(mapStateToProps)(FormDangKy);
