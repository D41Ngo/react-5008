import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";
import { BAN_CHON } from "../../../../redux/game-xuc-xac-reducer/game-xuc-xac.const";
import { playGameCreator } from "../../../../redux/game-xuc-xac-reducer/game-xuc-xac.action";

// 3 - 10: Xỉu
// 11 - 18: Tài

class KetQua extends Component {
  renderBanChon = () => {
    if (this.props.banChon === BAN_CHON.TAI) {
      return "Tài";
    }

    return "Xỉu";
  };

  render() {
    const { banChon, soBanThang, tongSoManChoi } = this.props;
    return (
      <div className="ket-qua-container">
        <p>Bạn chọn: {banChon === BAN_CHON.TAI ? "Tài" : "Xỉu"}</p>
        {/* <p>Bạn chọn: {this.renderBanChon()}</p> */}
        <p>Số bàn thắng: {soBanThang}</p>
        <p>Số màn chơi: {tongSoManChoi}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.props.dispatch(playGameCreator());
          }}
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    banChon: rootReducer.gameXucXacReducer.banChon,
    soBanThang: rootReducer.gameXucXacReducer.soBanThang,
    tongSoManChoi: rootReducer.gameXucXacReducer.tongSoManChoi,
  };
};

export default connect(mapStateToProps)(KetQua);
