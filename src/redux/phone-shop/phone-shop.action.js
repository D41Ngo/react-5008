import { PHONE_SHOP_TYPE } from "./phone-shop.constant";

// chỉnh sửa ở một nơi duy nhất.

// action creator
// f2: rename tất cả nơi nào có sử dụng nó.
export const changeSanPhamChiTietCreator = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.ChangSanPhamChiTiet,
    payload,
  };
};

export const themSanPhamCreator = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.ThemSanPham,
    payload,
  };
};

export const xoaSanPhamCreator = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.XoaSanPham,
    payload,
  };
};

export const thayDoiSoLuongSPCreator = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.ThayDoiSoLuongSP,
    payload,
  };
};

export const confirmXoaSPCreator = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.ConfirmXoaSP,
    payload,
  };
};

export const resetModalCreator = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.ResetModal,
    payload,
  };
};
