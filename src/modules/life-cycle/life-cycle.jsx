import React, { Component } from "react";

/**
 * Vòng đời component: 3 giai đoạn.
 * - Mounting: Đưa component lên trên giao diên.
 * - Updating: Khi component re-render.
 * - Un-mounting: Component bị xóa khỏi giao diện, không còn thấy trên DOM.
 */

export default class LifeCycle extends Component {
  render() {
    return <div>LifeCycle</div>;
  }
}
