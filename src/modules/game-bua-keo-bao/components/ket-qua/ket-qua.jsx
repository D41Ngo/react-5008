import React, { Component } from "react";
import { connect } from "react-redux";
import { playGameCreator } from "../../../../redux/game-bua-keo-bao/game-bua-keo-bao.action";
class KetQua extends Component {
  render() {
    // re-render???? cập nhật lại giá trị mới của component
    return (
      <div>
        <p>Số bàn thắng: {this.props.soBanThang}</p>
        <p>Tổng số màn chơi: {this.props.tongSoManChoi}</p>
        <button
          onClick={() => {
            this.props.dispatch(playGameCreator());
          }}
        >
          Play Game
        </button>
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
