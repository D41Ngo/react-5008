import { useCountStore } from "./App";

// ** hooks chỉ dùng 1 lần, tách file cho gọn,...
const useButton = () => {
  const { setCount } = useCountStore();

  const increase = () => {
    setCount((c) => {
      return c + 1;
    });
  };

  const decrease = () => {
    setCount((c) => c - 1);
  };

  return {
    increase,
    decrease,
  };
};

export function Button() {
  // ** xử lý logic
  const { decrease, increase } = useButton();

  // ** render UI
  return (
    <>
      <button onClick={increase}>+</button>

      <br />

      <button onClick={decrease}>-</button>
    </>
  );
}
