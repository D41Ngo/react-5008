import React, { memo } from "react";
// memo <===> PureComponent

function Child({ onIncrease }) {
  console.log("render");
  return (
    <div>
      Child Component
      <button className="btn btn-primary" onClick={onIncrease}>
        Increase
      </button>
    </div>
  );
}

export default memo(Child);
/**
 * Lợi: tránh re-render không cần thiết.
 * Hại: tạo lại quá nhiều, => cache lại quá nhiều => tràn ram
 */

const __useCallback = (fn) => {
  return fn;
};

const __useMemo = (fn) => {
  return fn(); // return 1
};

// closure: khi function được tạo, nó luôn ghi nhớ vị trị ( phạm vi ) mà nó được tạo ra.
const a = 10;

function fn1() {
  console.log(a); // 10
}

function fn2() {
  //   const a = 10;

  //   function fn1() {
  //     console.log(a);
  //   }
  const a = 20;

  fn1(); // goi o day
}

fn2();
