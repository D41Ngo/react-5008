import React, { Component } from "react";
import {
  CHON,
  mapper,
} from "../../../../redux/game-bua-keo-bao/game-bua-keo-bao.const";
import { chonCreator } from "../../../../redux/game-bua-keo-bao/game-bua-keo-bao.action";
import { connect } from "react-redux";

class IronMan extends Component {
  handleChon = (payload) => {
    this.props.dispatch(chonCreator(payload));
  };
  render() {
    return (
      <div>
        <div>Chọn: {mapper[this.props.ironman]}</div>
        <div>
          <button
            onClick={() => {
              this.handleChon(CHON.BUA);
            }}
            className="btn btn-secondary"
          >
            Búa
          </button>
          <button
            onClick={() => {
              this.handleChon(CHON.KEO);
            }}
            className="btn btn-secondary mx-2"
          >
            Kéo
          </button>
          <button
            onClick={() => {
              this.handleChon(CHON.BAO);
            }}
            className="btn btn-secondary"
          >
            Bao
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    ironman: rootReducer.gameBuaKeoBaoReducer.ironman,
  };
};
export default connect(mapStateToProps)(IronMan);
