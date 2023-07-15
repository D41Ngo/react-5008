import { Component } from "react";

// component dùng để tái sử dụng.
// không nên connect trực tiếp, lấy state trực tiếp.
export default class PhoneItemRedux extends Component {
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
