import React, { useState, useRef, useEffect } from "react";

const todosDefault = ["Đi học", "Đi Làm", "Ăn", "Ngủ"];

function UseRef() {
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState(todosDefault);
  //   const [inputValue, setInputValue] = useState("");

  // cache: không tạo lại biến
  // useRef: không muốn giá trị của biến thay đổi khi component re-render
  // giữ được giá trị của biến
  let inputValue = useRef(""); // {current: value}

  // Dùng để truy cập đến element (DOM)
  const inputRef = useRef(null);
  console.log("render");
  console.log(inputValue);

  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 3000);
  }, []);

  // Đôi khi chạy, đôi khi không chạy.
  useEffect(() => {
    // luôn chạy
    console.log(inputRef.current);
  }, []);

  if (!data) {
    return <>Loading....</>;
  }

  return (
    <div className="container">
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        count: {count}
      </button>
      <h1>Todo</h1>
      <div>
        <input
          ref={inputRef}
          id="input"
          className="shadow"
          onChange={(event) => {
            inputValue.current = event.target.value; // <========
            // setInputValue(event.target.value);
          }}
        />
        <button
          className="btn btn-success"
          onClick={() => {
            todos.push(inputValue.current); // <========
            console.log({ todos });
            // 0xaaaaaaa luôn cùng giá trị, => cùng giá trị thì nó sẽ không set lại state

            // nếu cùng giá trị thì state sẽ không cập nhật lại.
            setTodos([...todos]);

            const input = inputRef.current; //document.getElementById("input");
            // có cách nào truy cập đến dom trong react ???

            inputValue.current = "";
            input.value = ""; // clear trên giao diện
            input.focus();
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseRef;
