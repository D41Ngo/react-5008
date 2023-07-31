// rfc: Function Component
import React from "react";
import { useState } from "react";

export default function DemoProps() {
  // useState: để tạo state, nhận vào 1 tham số là giá trị default
  // trả về 2 phần tử: phần tử 1 - giá trị state
  // phần tử 2 - hàm để set lại state
  let [count, setCount] = useState(99);
  const [like, setLike] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [image, setImgage] = useState("https://i.pravatar.cc?img=1");
  const [light, setLight] = useState("off"); // 'on'
  const handleRandomImage = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    // const newImage = "https://i.pravatar.cc?img=" + number;
    const newImage = `https://i.pravatar.cc?img=${number}`;

    setImgage(newImage);
  };

  return (
    <div className="container">
      {light === "on" ? (
        <i className="fa-solid fa-lightbulb"></i>
      ) : (
        <i className="fa-regular fa-lightbulb"></i>
      )}
      {/* {light === "on" && <i className="fa-solid fa-lightbulb"></i>} */}

      {/* {light === "off" && <i className="fa-regular fa-lightbulb"></i>} */}

      <br />
      <button
        onClick={() => {
          setLight(light === "on" ? "off" : "on");
        }}
        className="btn btn-success"
      >
        {light === "on" ? "Tắt" : "Bật"}
      </button>

      <hr />

      <div className="card w-[200px] p-2">
        <div className="card-body">
          <img src={image} />
        </div>
        <button onClick={handleRandomImage} className="btn btn-success">
          Random
        </button>
      </div>

      <p
        style={{
          fontSize: fontSize,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa earum
        corrupti possimus impedit at consectetur quo quos facilis aut vero
        ducimus in libero laboriosam beatae, delectus ratione recusandae saepe
        aliquam iusto soluta. Aperiam magni optio similique. Aperiam nulla
        voluptatem libero architecto iste magnam, distinctio, quos animi
        voluptatum, similique numquam.
      </p>
      <button
        onClick={() => {
          setFontSize(fontSize + 5);
        }}
        className="btn btn-success mx-2"
      >
        +
      </button>
      <button
        onClick={() => {
          setFontSize(fontSize - 5);
        }}
        className="btn btn-success"
      >
        -
      </button>

      <h1 className="text-black">Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click 1
      </button>
      <hr />
      <button
        onClick={() => {
          // gắn trực tiếp giá trị lại cho state count.
          // cũng set lại giá trị được nhưng không re-render để cập nhật lại giao diện.
          // count = 10; // CHÚ Ý: Không dùng cách này
        }}
      >
        Click 2
      </button>

      <hr />

      <Child count={count} />

      {/* Child({ count:count }) */}
    </div>
  );
}

// Vì sao chúng ta có thể sử dụng trước khi nó được khai báo ????
function Child(props) {
  const { count = 20 } = props;

  return <h2>Child: {count}</h2>;
}

// function Child({ count = 20 }) {
//     return <h2>Child: {count}</h2>;
// }

// const Child2 = () => {
//   return <h2>Child2</h2>;
// };

// const Child3 = function () {
//   return <h2>Child2</h2>;
// };
