import React, { Component } from "react";
import { connect } from "react-redux";
import {
  chinhSuaSanPhamCreator,
  xoaSanPhamCreator,
} from "../../../../redux/react-form/react-form.action";
class ListProduct extends Component {
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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.props.mangSanPham.map((sp) => {
            return (
              <tr key={sp.id}>
                <th scope="row">{sp.id}</th>
                <td>{sp.name}</td>
                <td>${sp.price}</td>
                <td>
                  <img className="w-[50px] h-[50px]" src={sp.img} />
                </td>
                <td>{sp.productType}</td>
                <td>{sp.desc}</td>
                <td>
                  <button
                    onClick={() => {
                      if (
                        window.confirm("Bạn có chắc chắn muốn xóa hay không?")
                      ) {
                        this.props.dispatch(
                          xoaSanPhamCreator({
                            id: sp.id,
                          })
                        );
                      }
                    }}
                    className="btn btn-danger mx-2"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => {
                      this.props.dispatch(chinhSuaSanPhamCreator(sp));
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangSanPham: rootReducer.reactFormReducer.mangSanPham,
  };
};

export default connect(mapStateToProps)(ListProduct);
