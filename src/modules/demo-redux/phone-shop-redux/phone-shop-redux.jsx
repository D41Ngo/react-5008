import React, { Component } from "react";
import GioHangRedux from "./gio-hang-redux";
import XemChiTietRedux from "./xem-chi-tiet-redux";
import PhoneItemRedux from "./phone-item-redux";
import { connect } from "react-redux";
import { PHONE_SHOP_TYPE } from "../../../redux/phone-shop/phone-shop.constant";
import {
  changeSanPhamChiTietCreator,
  themSanPhamCreator,
} from "./../../../redux/phone-shop/phone-shop.action";
import Modal from "./components/modal";

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

class PhoneShopRedux extends Component {
  handleChange = () => {
    this.setState({ isLogin: true }); // 1.
    this.setState({ isLogin: true }); // 2.
  };

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
    console.log(this.props);
    return (
      <div className="container">
        {this.props.modal ? <Modal modal={this.props.modal} /> : null}

        <GioHangRedux />
        <div className="mt-2">
          <div className="row">
            {listProduct.map((item) => {
              return (
                <div key={item.maSP} className="col-4">
                  <PhoneItemRedux
                    onAddSanPham={this.props.handleAddSanPham}
                    onChangeSanPham={this.props.handleChangeSanPhamChiTiet}
                    phone={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2">
          <XemChiTietRedux sanPham={this.props.sanPhamChiTiet} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    sanPhamChiTiet: rootReducer.phoneShopReducer.spChiTiet,
    gioHang: rootReducer.phoneShopReducer.gioHang,
    modal: rootReducer.phoneShopReducer.modal,
  };
};

// tạo 1 function trung gian, khi gọi thì nó sẽ gọi dispatch action lên trên redux
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeSanPhamChiTiet: (sanPham) => {
      // const action = ChangeSanPhamChiTietCreator(sanPham);
      // console.log("------------");
      // console.log(action);
      // console.log("------------");
      // dispatch(action);

      dispatch(changeSanPhamChiTietCreator(sanPham));
    },
    handleAddSanPham: (sanPham) => {
      const action = themSanPhamCreator(sanPham);
      dispatch(action);
    },
  };
};

// PhoneShopRedux: không phải là một component dùng để tái sử dụng
export default connect(mapStateToProps, mapDispatchToProps)(PhoneShopRedux);
