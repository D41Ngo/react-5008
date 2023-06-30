import React, { Component } from "react";
/**
 * State: là trạng thái của một component.
 * Khi mà chúng ta tương tác trên giao diện mà có sự thay đổi.
 * state: là thuộc tính kế thừa từ lớp Component
 */
export default class State extends Component {
  // 1. Cách khai báo state: isLogin
  // Chú ý: Khai báo tất cả state ở trong thuộc tính state.
  state = {
    isLogin: false,
    // todos: [],
    // value: "",
  };

  handleLogin = () => {
    // Error
    // this.state.isLogin = true;
    // this.render();

    const newState = {
      isLogin: true,
    };
    // 2. Cách set lại state.
    // mỗi lần chúng ta sét lại state thì react nó tự động render lại UI (re-render);
    // setState: là method kế thừa từ lớp Component
    // sẽ tự động merge những state cũ và mới lại với nhau.
    this.setState(newState);
    // this.render(); không cần gọi lại method này.
  };

  handleLogout = () => {
    this.setState({
      isLogin: false,
      // Sử dụng state nào thì nên khai báo rõ ở trên thuộc tính state.
      // isComplete: true, // nó sẽ thêm vào state cho chúng ta nếu như chưa có. TRÁNH DÙNG.
    });
  };

  renderContent = () => {
    if (this.state.isLogin) {
      return <p>Cyber Soft</p>;
    }

    return (
      <button
        onClick={this.handleLogin}
        className="btn btn-outline-success mx-2"
        type="submit"
      >
        Login
      </button>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <div className="d-flex">
              {/* 1. Xử lý trực tiếp tại đây: toán tử ba ngôi*/}
              {/* Chú ý: không sử dụng được if else */}
              {/* {this.state.isLogin ? (
                <p>Cyber Soft</p>
              ) : (
                <button
                  onClick={this.handleLogin}
                  className="btn btn-outline-success mx-2"
                  type="submit"
                >
                  Login
                </button>
              )} */}

              {/* 2. */}
              {this.renderContent()}

              <button
                onClick={this.handleLogout}
                className="btn btn-outline-success"
                type="submit"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
