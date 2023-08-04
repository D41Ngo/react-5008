import React, { useState, useCallback, useMemo } from "react";
import Child from "./child";

function fibonacci(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.time("fibonacci");

  for (let i = 1; i <= number; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.timeEnd("fibonacci");

  return nextTerm;
}

const MAX_NUMBER = 1000;

function Performance() {
  // set state thì cả component sẽ được tạo lại
  const [count, setCount] = useState(0);

  // const MAX_NUMBER = 1000;

  // const [MAX_NUMBER, s] = useState(100); Khoong nen
  // const MAX_NUMBER = useMemo(() => { Khong nen
  //     return 100;
  // }, []);

  const handleChangeCount = () => {
    setCount(count + 1);
  };

  // 0xaaaaaaaaaaaaaaaa
  // 0xbbbbbbbbbbbbbbbb

  // useCallback: cache lại giá trị của function
  // [dependencies]: tạo lại function khi dependencies thay đổi.

  // Mình không muốn tạo lại function nhiều lần thì dùng useCallback cho mọi function được không ? useCallback + memo
  // chỉ nên đối với dependencies rỗng.
  // đối với dependencies có giá luôn tạo lại function khi dependencies

  // tạo lại quá nhiều, => cache lại quá nhiều => tràn ram

  /**
   * const __useCallback = (fn) => {
   *    return fn;
   * };
   */
  const increase = useCallback(() => {
    // count: 0;
    console.log("closures", count);
    // closures
    setCount((count) => {
      // tránh closure của js
      console.log("setCount", count);
      return count + 1;
    }); // 0 + 5 | 0 + 5 | 0 + 5

    return 100;
  }, []); // [] tạo 1 lần duy nhất.

  /**
   * useMemo: dành cho xử lý hay tính toán phức tạp.
   * dùng để ghi nhớ lại giá trị của biến hay kết quả được tính toán.
   */

  /**
   * const __useMemo = (fn) => {
   *    return fn(); // return 1
   * };
   */
  const result = useMemo(() => {
    return fibonacci(1000);
  }, []);

  return (
    <div>
      <button className="btn btn-success" onClick={handleChangeCount}>
        Count: {count}
      </button>
      <p>Fibonacci: {result}</p>

      <Child onIncrease={increase} />
    </div>
  );
}
// ==> tách state của vào những component riêng biệt.
function Count() {
  const [count, setCount] = useState(0);

  const handleChangeCount = () => {
    setCount(count + 1);
  };
  return (
    <button className="btn btn-success" onClick={handleChangeCount}>
      Count: {count}
    </button>
  );
}

export default Performance;
