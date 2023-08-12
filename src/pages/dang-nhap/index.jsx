import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function DangNhap() {
  const navigate = useNavigate();

  const loginRef = useRef({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    loginRef.current[name] = value;
  };

  const handleLogin = () => {
    console.log(loginRef.current);

    if (
      loginRef.current.userName === "cyber" &&
      loginRef.current.password === "123456"
    ) {
      // Đúng account
      // cho phép chuyển trang
      navigate("/about");
      return;
    }

    // không làm gì cả
    // popup thông báo sai tài khoản
    window.alert("Sai tài khoản !!!");
  };

  return (
    <div>
      <input
        name="userName"
        onChange={handleChange}
        placeholder="User name"
        type="text"
      />
      <br />
      <input
        name="password"
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />
      <br />
      <button onClick={handleLogin} className="btn btn-success">
        Đăng Nhập
      </button>
    </div>
  );
}

export default DangNhap;
