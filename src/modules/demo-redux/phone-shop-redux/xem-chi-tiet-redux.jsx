import React, { Component } from "react";

export default class XemChiTietRedux extends Component {
  render() {
    const { sanPham } = this.props;
    // const sanPham = this.props.sanPham;

    console.log(sanPham);

    return (
      <div>
        <div className="row">
          <div className="col-4">
            <h2>{sanPham.tenSP}</h2>
            <img
              style={{
                width: "100%",
              }}
              src={sanPham.hinhAnh}
              alt=".."
            />
          </div>
          <div className="col-8">
            <h2>Thông số kĩ thuật</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình:</td>
                  <td>{sanPham.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành:</td>
                  <td>{sanPham.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước:</td>
                  <td>{sanPham.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau:</td>
                  <td>{sanPham.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram:</td>
                  <td>{sanPham.ram}</td>
                </tr>
                <tr>
                  <td>Rom:</td>
                  <td>{sanPham.rom}</td>
                </tr>
                <tr>
                  <td>Giá bán:</td>
                  <td>{sanPham.giaBan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
