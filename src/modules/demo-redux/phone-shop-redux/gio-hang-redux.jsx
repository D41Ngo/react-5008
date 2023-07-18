import React, { Component } from "react";
import { connect } from "react-redux";
import {
  confirmXoaSPCreator,
  resetModalCreator,
  thayDoiSoLuongSPCreator,
  xoaSanPhamCreator,
} from "../../../redux/phone-shop/phone-shop.action";

// GioHangRedux ? có phải là component dùng để tái sử dụng?
class GioHangRedux extends Component {
  render() {
    const { gioHang, onDeleteSp, onChangeQuantity } = this.props;

    console.log("GioHangRedux", this.props);

    return (
      <div>
        <h1>Giỏ hàng</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Giá</th>
              <th>Hình Ảnh</th>
              <th>Số lượng</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((sp) => {
              return (
                <tr key={sp.maSP}>
                  <td>{sp.maSP}</td>
                  <td>{sp.giaBan}</td>
                  <td>
                    <img
                      style={{
                        width: 100,
                      }}
                      src={sp.hinhAnh}
                      alt=".."
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.dispatch(
                          thayDoiSoLuongSPCreator({
                            quantity: 1,
                            maSP: sp.maSP,
                          })
                        );
                      }}
                      className="btn btn-success"
                    >
                      +
                    </button>
                    <span
                      style={{
                        fontSize: 30,
                      }}
                    >
                      {sp.soLuong}
                    </span>
                    <button
                      onClick={() => {
                        this.props.dispatch(
                          thayDoiSoLuongSPCreator({
                            quantity: -1,
                            maSP: sp.maSP,
                          })
                        );
                      }}
                      className="btn btn-success"
                    >
                      -
                    </button>
                  </td>
                  <td>{sp.soLuong * sp.giaBan}</td>
                  <td>
                    <button
                      onClick={() => {
                        // dispatch trực tiếp.
                        // this.props.dispatch(xoaSanPhamCreator(sp.maSP));

                        this.props.dispatch(
                          confirmXoaSPCreator({
                            status: "",
                            title: "Xóa Sản Phẩm",
                            content:
                              "Bạn có chắc chắn muốn xóa sản phẩm hay không?",
                            onOk: () => {
                              this.props.dispatch(xoaSanPhamCreator(sp.maSP));

                              this.props.dispatch(resetModalCreator());
                            },
                            onCancle: () => {
                              this.props.dispatch(resetModalCreator());
                            },
                          })
                        );
                      }}
                      className="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.phoneShopReducer.gioHang,
  };
};

// 1 lựa chọn duy nhất.
// ---------------------
// 1. dispatch trực tiếp. this.props.dispatch
// 2. dispatch gián tiếp. mapStateToProps

export default connect(mapStateToProps)(GioHangRedux);
