import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";
import { chonTaiXiuCreator } from "./../../../../redux/game-xuc-xac-reducer/game-xuc-xac.action";
import { BAN_CHON } from "../../../../redux/game-xuc-xac-reducer/game-xuc-xac.const";
class TaiXiu extends Component {
  tinhDiemXucXac = () => {
    const diem = this.props.listXucXac.reduce((total, xucXac) => {
      return total + xucXac.diem;
    }, 0);

    if (diem <= 10 && diem >= 3) {
      return "Xỉu";
    }
    return "Tài";
  };

  render() {
    return (
      <div className="tai-xiu-container">
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.dispatch(chonTaiXiuCreator(BAN_CHON.TAI));
          }}
        >
          Tài
        </button>
        <div className="xuc-xac">
          {this.props.listXucXac.map((xucXac, index) => {
            return <img key={index} alt="..." src={xucXac.image} />;
          })}
          <h2 className="text-center mt-2">{this.tinhDiemXucXac()}</h2>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            const action = chonTaiXiuCreator(BAN_CHON.XIU);
            this.props.dispatch(action);
          }}
        >
          Xỉu
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    listXucXac: rootReducer.gameXucXacReducer.listXucXac,
  };
};

export default connect(mapStateToProps)(TaiXiu);
