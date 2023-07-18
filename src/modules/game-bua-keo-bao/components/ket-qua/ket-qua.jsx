import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    return (
      <div>
        <p>Số bàn thắng: {this.props.soBanThang}</p>
        <p>Tổng số màn chơi: {this.props.tongSoManChoi}</p>
        <button>Play Game</button>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    soBanThang: rootReducer.gameBuaKeoBaoReducer.soBanThang,
    tongSoManChoi: rootReducer.gameBuaKeoBaoReducer.tongSoManChoi,
  };
};
export default connect(mapStateToProps)(KetQua);
