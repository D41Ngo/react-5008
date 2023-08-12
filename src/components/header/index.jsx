import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const handleStyle = (param) => {
    const { isActive } = param;
    return {
      color: isActive ? "blue" : "white",
    };
  };

  const handleClassActive = ({ isActive }) => {
    return isActive ? "text-blue-500" : "text-white";
  };

  return (
    <div>
      <ul className="flex gap-4 px-4 py-2 bg-black text-white">
        <li>
          <NavLink
            className={handleClassActive}
            // style={handleStyle}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={handleClassActive} to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={handleClassActive} to={"/contact"}>
            Contact
          </NavLink>
          {/* <a href="/contact">Contact</a>  ??? vấn đề của thẻ a */}
        </li>

        <li>
          <NavLink className={handleClassActive} to={`/detail/2`}>
            Detail
          </NavLink>
        </li>

        <li>
          <NavLink className={handleClassActive} to={"/quan-ly/dang-nhap"}>
            Đăng Nhập
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
