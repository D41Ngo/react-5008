import { useState, createContext, useContext } from "react";
import { HienThiCount } from "./hien-thi-count";
import { Button } from "./button";

// Khởi tạo store global: chứa giá trị null
export const CountStore = createContext(null);

export default function App() {
  const [count, setCount] = useState(0);

  const store = { count, setCount };

  return (
    // value: gía trị store
    // 1. Khởi tạo store
    <CountStore.Provider value={store}>
      <HienThiCount />
      <br />
      <Button />
    </CountStore.Provider>
  );
}

// custome hooks
/**
 * Đơn giản là một function
 * Tại vì có thể sử dụng các hooks của react bên trong: useState, useEffect,...
 *
 * use + name
 * rule hooks
 */

/**
 * 1. Tái sử dung.
 * 2. Chỉ sử dụng 1 lần, tách file cho gọn
 */

//  * 1. Tái sử dung.
export const useCountStore = () => {
  const value = useContext(CountStore);

  return value;
};

//  function bình thường
const calcTotal = () => {};
