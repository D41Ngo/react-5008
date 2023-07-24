import { createStore, combineReducers } from "redux";
import { carReducer } from "./car-reducer";
import { numberReducer } from "./number-reducer";
import { phoneShopReducer } from "./phone-shop/phone-shop.reducer";
import { gameXucXacReducer } from "./game-xuc-xac-reducer/game-xuc-xac.reducer";
import { gameBuaKeoBaoReducer } from "./game-bua-keo-bao/game-bua-keo-bao.reducer";

import { reactFormReducer } from "./react-form/react-form.reducer";
// @reduxjs/toolkit
// .js .jsx
// .css import rõ ràng tên file vào
const countStateDefault = { count: 99 };

const rootReducer = combineReducers({
  // { count: 52, isLogin: false }: set up state mặc định
  // --- reducer:
  // 1. xử lý logic
  // 2. lưu trữ state
  numberReducer: numberReducer,

  countReducer: (state = countStateDefault, action) => {
    // if (action.type === "tang-count") {
    //   state.count += 1;
    // return { ...state }; // giá cũ === giá trị mới. 2 thằng đang có địa chỉ giống nhau => không re-render
    // }

    // cơ chế re-render của redux nó sẽ so sánh giá trị cũ và giá trị mới.
    // - khác nhau sẽ re-render.
    // - giống nhau không re-render.

    // đối với object hay array khi return phải clone ra địa chỉ mới.
    switch (action.type) {
      case "tang-count": {
        state.count += 1;
        return { ...state };
      }
      case "giam-count": {
        state.count -= 1;
        return { ...state };
      }
      default: {
        return state;
      }
    }
  },

  // Chú ý: nên tạo một biến lưu trữ state default bên ngoài.
  carReducer: carReducer,

  phoneShopReducer,

  gameXucXacReducer,

  gameBuaKeoBaoReducer,

  reactFormReducer,
});

// redux store. tập trung tất cả state của ứng dụng.

export const store = createStore(
  rootReducer,
  // extension cho redux.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
