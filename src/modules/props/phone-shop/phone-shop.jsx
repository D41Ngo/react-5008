import React, { Component } from "react";
import XemChiTiet from "./xem-chi-tiet";
import GioHang from "./gio-hang";
// import default
// import mock_data from "./mock-data.json";

// import { data } from "./mock-data";
// console.log(data);
// console.log(mock_data);

class Product {}
const obj1 = new Product();
const obj2 = {};

const listProduct = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/images/phones/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "/images/phones/sp_blackberry.png",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/images/phones/sp_iphoneX.png",
  },
];

// component: logic + UI ( X )

// component chỉ để show UI.
// redux thì xử lý logic.

export default class PhoneShop extends Component {
  state = {
    isLogin: false,
    count: 52,
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "/images/phones/vsphone.jpg",
    },

    gioHang: [],
  };
  // state muốn xét lại được đặt ở đâu thì gọi method this.setState ở tại component đó.

  // binding lên giao diện, và xử lý xét lại state.

  handleChange = () => {
    this.setState({ isLogin: true }); // 1.
    this.setState({ isLogin: true }); // 2.
  };

  handleChangeCount = (value) => {
    this.setState({
      count: this.state.count + value,
    });
  };

  handleChangeSanPhamChiTiet = (sp) => {
    this.setState({
      spChiTiet: sp,
    });
  };

  handleAddSanPham = (sp) => {
    const indexSp = this.state.gioHang.findIndex(
      (item) => sp.maSP === item.maSP
    );
    let newGioHang = [];

    // -1: chưa có trong giỏ hàng
    if (indexSp === -1) {
      sp.soLuong = 1;
      newGioHang = [...this.state.gioHang, sp];
    } else {
      sp.soLuong += 1;
      // 2 | 1 |3
      // xóa đi '1' phần tử có 'indexSp', và thêm 'sp' vào tại vị trí đó
      this.state.gioHang.splice(indexSp, 1, sp); // splice thay đổi mảng gốc
      // toSplice

      newGioHang = this.state.gioHang;

      // firefox: chưa support
      // newGioHang = this.state.gioHang.toSpliced(indexSp, 1, sp);
    }

    this.setState({
      gioHang: newGioHang,
    });
  };

  handleDeleteSp = (maSP) => {
    // lọc lấy ra những phần tử mà chúng không muốn xóa
    // xóa đi phần tử có maSP === maSP

    // window.confirm() => return về true | false

    if (window.confirm("Bạn có chắc chắn muốn xóa hay không")) {
      const newGioHang = this.state.gioHang.filter(
        (item) => item.maSP !== maSP
      );

      this.setState({
        gioHang: newGioHang,
      });
    }
  };

  // nếu như function có từ 2->3 tham số trở lên thì nên truyền dưới dạng object.
  handleChangeQuantity = (params) => {
    const { quantity, maSP } = params;

    console.log({ quantity, maSP });

    // 1. tìm sản phẩm có maSP trong giỏ hàng.
    // - nếu có thì tăng giảm.
    // - thoát khỏi function => return;
    // 2. nếu nhừ số lượng của sản phẩm đang là 1 và người dùng nhấn button giảm.
    //  - xóa. ( V )
    //  - giữ nguyên. ( X )

    const sanPham = this.state.gioHang.find((item) => item.maSP === maSP);

    if (!sanPham) return;

    if (sanPham.soLuong === 1 && quantity === -1) {
      this.handleDeleteSp(maSP); // thuc hien xong.
      // thoát khỏi function không thực hiện những dòng lệnh phía dưới nữa.
      return;
    }

    sanPham.soLuong += quantity;

    console.log("Gio Hang Sau Khi Thay Doi", this.state.gioHang);

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  render() {
    // this.props => type object
    return (
      <div className="container">
        <GioHang
          onDeleteSp={this.handleDeleteSp}
          onChangeQuantity={this.handleChangeQuantity}
          gioHang={this.state.gioHang}
        />
        <div className="mt-2">
          <div className="row">
            {listProduct.map((item) => {
              return (
                <div key={item.maSP} className="col-4">
                  <PhoneItem
                    onAddSanPham={this.handleAddSanPham}
                    onChangeSanPham={this.handleChangeSanPhamChiTiet}
                    phone={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2">
          <XemChiTiet sanPham={this.state.spChiTiet} />
        </div>

        {/* Mỗi component Counter được sử dụng nó sẽ có state riêng biệt
        <Counter
          thayDoiCount={this.handleChangeCount}
          handleChangeCount={this.handleChangeCount}
          count={this.state.count}
        />
        <Show count={this.state.count} /> */}
        {/* <H1>[children]</H1> */}
        {/* <H1>Trung Tam Cyber Soft</H1> */}
        {/* eslint-disable-next-line react/no-children-prop */}
        {/* <H1 children="Nguyen Van A" /> */}
      </div>
    );
  }
}

/**
 * props vs state
 * state: - trạng thái của một component.
 *        - [TRONG COMPONENT] có thể xét lại giá trị. (this.setState)
 * props: - giá trị truyền từ component cha -> con, giúp giao tiếp giữa 2 component với nhau.
 *        - [TRONG COMPONENT] không thể xét lại giá trị vì giá trị props được truyền từ bên ngoài vào.
 */

class Show extends Component {
  render() {
    return (
      <>
        <H1>{this.props.count}</H1>
      </>
    );
  }
}

class Counter extends Component {
  // set lại state cho chính component Counter.
  handleChangeCount = (value) => {
    this.props.handleChangeCount(value);
  };

  render() {
    // là một biến, và xét lại giá trị của biến đó. mỗi lần xét lại giá trị mới thì nó sẽ tự động render lại giao diện
    return (
      <>
        <h1>{this.props.count}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            // this.handleChangeCount(1);
            // this.props.handleChangeCount(1);
            this.props.thayDoiCount(1);
          }}
        >
          +
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            // this.handleChangeCount(-1);
            this.props.handleChangeCount(-1);
          }}
        >
          -
        </button>
      </>
    );
  }
}

class H1 extends Component {
  render() {
    // props childern là một props đặc biệt nằm giữa 2 thẻ đóng và mở của component
    return (
      <h1
        style={{
          fontSize: "3rem",
          color: "blue",
        }}
      >
        {this.props.children}
      </h1>
    );
  }
}

class Item extends Component {
  render() {
    // this.props.title
    // JSX
    return (
      <div>
        <h1>item</h1>
      </div>
    );
  }
}

class PhoneItem extends Component {
  render() {
    const item = this.props.phone;

    const { onChangeSanPham, onAddSanPham } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.tenSP}</h5>
          <p className="card-text">{item.giaBan}</p>
          <div className="d-flex gap-1">
            <button
              onClick={() => {
                //1. chaỵ hàm này
                onChangeSanPham(item); // 2. gọi onChangeSanPham

                // onChangeSanPham gọi thì nó sẽ gọi handleChangeSanPhamChiTiet
              }}
              className="btn btn-primary"
            >
              Xem Chi Tiết
            </button>

            <button
              onClick={() => {
                onAddSanPham(item);
              }}
              className="btn btn-primary"
            >
              Thêm Sản Phẩm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
