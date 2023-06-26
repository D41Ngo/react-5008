import { Component } from "react";
import Header from "./header";
import Navigation from "./navigation";
import Content from "./content";
import Footer from "./footer";

// Tạo component dùng để tái sử dụng được nhiều nơi.

// có 2 loại component:
// 1. Component cho page
// 2. Tái sử dụng ở nhiều trang

// Chú Ý: Tránh xét cứng width, height, những class đặc biệt chỉ sử dụng ở một trang duy nhất.
export default class HomeLayout extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <div className="row">
          <div className="col-4">
            <Navigation />
          </div>
          <div className="col-8">
            <Content />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
