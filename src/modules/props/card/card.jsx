import React, { Component } from "react";

export default class Card extends Component {
  render() {
    // this.props.name: để lấy giá trị từ ListCard truyền qua

    // show tất cả các giá trị component truyền xuống cho component con.
    // Chú ý không dùng tên key làm props của component.
    // react chiếm quyền sử dụng tên props là key rồi.
    console.log(this.props);

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.hinhAnh} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.gia}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
