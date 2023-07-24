import { ReactForm } from "./react-form.const";
const STATE_DEFAULT = {
  mangSanPham: [],
  spChinhSua: null,
};

export const reactFormReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case ReactForm.DangKySanPham: {
      state.mangSanPham = [...state.mangSanPham, action.payload];
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
    default:
      return state;
  }
};
