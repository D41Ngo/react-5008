import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

// App là một thẻ react do chúng ta tự định nghĩa.
// App: là một component.

// React.StrictMode: là một thẻ của react, giúp phát hiện ra lỗi mà ảnh hưởng đến hiệu suất của trang web.

// main.jsx: Nơi config, liên kết với trang html đưa lên giao diện.

// App: nơi chúng ta sẽ code giao diện chính trong component này.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
