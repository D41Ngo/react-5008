import { ReactForm } from "./react-form.const";

// => || falsy : 0, false, null, undefined
// => ?? null undefined
const STATE_DEFAULT = {
  mangSanPham: JSON.parse(
    localStorage.getItem("reduxStore") ?? JSON.stringify([])
  ),
  spChinhSua: null,
};

export const reactFormReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case ReactForm.DangKySanPham: {
      state.mangSanPham = [...state.mangSanPham, action.payload];

      localStorage.setItem("reduxStore", JSON.stringify(state.mangSanPham));

      return { ...state };
    }
    case ReactForm.XoaSanPham: {
      state.mangSanPham = state.mangSanPham.filter(
        (sp) => sp.id !== action.payload.id
      );
      return { ...state };
    }
    case ReactForm.ChinhSuaSanPham: {
      state.spChinhSua = action.payload;

      return { ...state };
    }

    case ReactForm.HoanThienChinhSua: {
      /**
       * 1. tìm kiếm sp cần chỉnh sửa và cập nhật lại
       *
       * 2. set spChinhSua về giá trị.
       */
      // 1.
      const index = state.mangSanPham.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index === -1) {
        return { ...state };
      }
      // Cách 1:
      // const newMangSanPham = [...state.mangSanPham];
      // newMangSanPham[index] = action.payload;

      // state.mangSanPham = newMangSanPham;

      // Cách 2:
      state.mangSanPham[index] = action.payload;
      state.mangSanPham = [...state.mangSanPham];

      // 2.
      state.spChinhSua = null;
      return { ...state };
    }
    default:
      return state;
  }
};
