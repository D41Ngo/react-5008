import React, { Component } from "react";
import TaiXiu from "./components/tai-xiu";
import KetQua from "./components/ket-qua";

import "./style.css";

export default class GameXucXac extends Component {
  render() {
    return (
      <div className="game-xuc-xac">
        <h1 className="title">Game Đổ Xúc Xắc</h1>
        <div className="tai-xiu">
          <TaiXiu />
        </div>
        <div className="ket-qua">
          <KetQua />
        </div>
      </div>
    );
  }
}
