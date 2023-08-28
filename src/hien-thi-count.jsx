import { useCountStore } from "./App";

export function HienThiCount() {
  // 2. Lên store lấy dữ liệu về
  //   const value = useContext(CountStore);
  const value = useCountStore();

  return <>Count: {value.count}</>;
}
