import { ReactForm } from "./react-form.const";

export const dangKySPCreator = (payload) => {
  return {
    type: ReactForm.DangKySanPham,
    payload,
  };
};

export const xoaSanPhamCreator = (payload) => {
  return {
    type: ReactForm.XoaSanPham,
    payload,
  };
};

export const chinhSuaSanPhamCreator = (payload) => {
  return {
    type: ReactForm.ChinhSuaSanPham,
    payload,
  };
};
