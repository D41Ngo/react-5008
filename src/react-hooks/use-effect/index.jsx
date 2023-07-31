import React, { useEffect } from "react";
import { useState } from "react";
// rfc

/**
 * useEffect:
 * - Luôn luôn chạy sau khi component render lên giao diện. ( can thiệp vào DOM thật )
 * - 3 trường hợp.
 * - TH1: Không có dependencies
 * - Th2: Có dependencies là một array rỗng
 * - TH3: Có dependencies là một array có phần tử
 */
export default function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(true);

  // TH1. Mounting + updating => không ai dùng. Luôn chạy khi re-render
  useEffect(() => {
    console.log("useEffect [[TH1]]");

    // setCount(count + 1); gây ra lỗi tràn bộ nhớ
  });

  // TH2. Mounting => Chạy một lần duy nhất.
  useEffect(() => {
    console.log("useEffect [[TH2]]");
  }, []);

  // TH3. Mounting + Chạy khi mà giá trị nằm trong dependencies thay đổi
  // Nếu như giá trị like thay đổi thì callback fn sẽ được gọi lại
  useEffect(() => {
    console.log("useEffect [[TH3]]");

    return () => {
      // trước khi component chuẩn bị update
      console.log("clean-up [[TH3]]");
    };
  }, [like]);

  return (
    <>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          Like: {like}
        </button>
      </div>
      <div>
        <p>Count: {count}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
      <hr className="mt-5" />
      {show && <Child />}
      <button
        className="btn btn-success"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
    </>
  );
}

function Child() {
  useEffect(() => {
    // clean up function, chạy khi component un-mounting.
    return () => {
      // un-mounting
      console.log("clean-up");
    };
  }, []);
  return <h3>Child</h3>;
}
