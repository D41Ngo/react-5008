import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Contact from "./../pages/contact/index";
import Home from "../pages/home";
import UrlNotFound from "../pages/error";
import DangKy from "../pages/dang-ky";
import Header from "../components/header";
import HomeTemplate from "../templates/home";
// import LoginTemplate from "../templates/login"; // absolute, không phục thuộc vào ai hết
import LoginTemplate from "@/templates/login"; // relative, phụ thuộc => [[ @ ]]
import DangNhap from "../pages/dang-nhap";
import Detail from "../pages/detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTemplate />,
    children: [
      {
        path: "/", // trùng với path này, thì outlet là Home
        element: <Home />,
      },
      {
        path: "/contact", // absolute,
        element: <Contact />,
      },
      {
        // url: luôn đặt chữ ký thường.
        path: "about",
        element: <About />,
      },
      {
        // Truyền data trên url chỉ với 1 tham số.
        // [[ :TenProperty ]]
        path: "detail/:idContent",
        // path: "detail/:idContent/:content", ít dùng
        element: <Detail />,
      },
    ],
  },
  // {
  //   // url: cách nhau bằng dấu gạch ngang.
  //   path: "/quan-ly",
  //   element: <LoginTemplate />,
  //   children: [
  //     // Chú ý: Nếu con muốn sử dụng path absolute thì con phải có path tương ứng với cha
  //     {
  //       path: "/quan-ly/dang-ky", // => /quan-ly/dang-ky
  //       element: <DangKy />,
  //     },
  //     {
  //       path: "/quan-ly/dang-nhap", // ---- /quan-ly/dang-nhap
  //       element: <div>Đăng Nhập</div>,
  //     },
  //   ],
  // },

  {
    // url: cách nhau bằng dấu gạch ngang.
    path: "/quan-ly",
    element: <LoginTemplate />,
    children: [
      // @TODO: relative , phụ thuộc ?
      {
        path: "dang-ky", // => /quan-ly/dang-ky
        element: <DangKy />,
      },
      {
        path: "dang-nhap", // ---- /quan-ly/dang-nhap
        element: <DangNhap />,
      },
    ],
  },
  {
    path: "*", // Trùng với lại mọi url mà người dùng truy cập, nếu chưa được setup.
    element: <UrlNotFound />,
  },
]);
