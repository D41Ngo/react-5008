import React, { Component } from "react";
import IronMan from "./components/iron-man";
import KetQua from "./components/ket-qua";
import Thanos from "./components/thanos";

/**
 * Khi nào component sẽ re-render
 * - state thay đổi.
 * - component cha re-render -> component con re-render.
 */

export default class GameBuaKeoBao extends Component {
  render() {
    return (
      <div className="game-bua-keo-bao d-flex justify-content-between">
        <div>
          <IronMan />
        </div>
        <div>
          <KetQua />
        </div>
        <div>
          <Thanos />
        </div>
      </div>
    );
  }
}
