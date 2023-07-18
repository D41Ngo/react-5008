import React, { Component } from "react";
import { connect } from "react-redux";
import { mapper } from "../../../../redux/game-bua-keo-bao/game-bua-keo-bao.const";

class Thanos extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-success">{mapper[this.props.thanos]}</button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    thanos: rootReducer.gameBuaKeoBaoReducer.thanos,
  };
};
export default connect(mapStateToProps)(Thanos);
