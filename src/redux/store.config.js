import { createStore, combineReducers } from "redux";

// @reduxjs/toolkit

const carStateDefault = "/images/cars/red-car.jpg";

const countStateDefault = { count: 99 };

const rootReducer = combineReducers({
  // { count: 52, isLogin: false }: set up state mặc định
  // --- reducer:
  // 1. xử lý logic
  // 2. lưu trữ state
  numberReducer: (
    state = { count: 52, isLogin: false, gioHang: [], spChiTiet: {} },
    action
  ) => {
    // đẩy logic lên trên này xử lý.
    return state;
  },

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
  carReducer: (state = carStateDefault, action) => {
    switch (action.type) {
      case "change-img": {
        // payload: color
        // state = `/images/cars/${action.payload}-car.jpg`;

        state = action.payload;

        return state;
      }
      default:
        return state;
    }
  },
});

// redux store. tập trung tất cả state của ứng dụng.

export const store = createStore(
  rootReducer,
  // extension cho redux.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
