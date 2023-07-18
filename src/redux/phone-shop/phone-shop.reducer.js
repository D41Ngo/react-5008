import { PHONE_SHOP_TYPE } from "./phone-shop.constant";

const STATE_DEFAULT = {
  isLogin: false,
  count: 52,
  spChiTiet: {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/images/phones/vsphone.jpg",
  },

  gioHang: [],

  // modal null | object
  // null thì không hiển thị modal
  // object thì mới show modal lên
  modal: null,
  // {
  //   status: "",
  //   title: "Xóa Sản Phẩm",
  //   content: "Bạn có chắc chắn muốn xóa sản phẩm hay không?",
  //  onOk:()=>{},
  // onCancle:()=>{}
  // },
};

export const phoneShopReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case PHONE_SHOP_TYPE.ChangSanPhamChiTiet:
      state.spChiTiet = action.payload;
      return { ...state };

    case PHONE_SHOP_TYPE.ThemSanPham: {
      const sp = action.payload;

      // @TODO:1
      const indexSp = state.gioHang.findIndex((item) => sp.maSP === item.maSP);

      let newGioHang = [];
      // -1: chưa có trong giỏ hàng
      if (indexSp === -1) {
        sp.soLuong = 1;
        // @TODO:2
        newGioHang = [...state.gioHang, sp];
      } else {
        sp.soLuong += 1;
        // @TODO:3
        state.gioHang.splice(indexSp, 1, sp);
        // @TODO:4
        newGioHang = [...state.gioHang];
      }

      state.gioHang = newGioHang;
      // gioHang cùng địa chỉ, cùng giá trị
      // cùng giá trị thì redux nó sẽ không render lại
      return { ...state };
    }
    case PHONE_SHOP_TYPE.XoaSanPham: {
      // if (window.confirm("Bạn có chắc chắn muốn xóa hay không")) {
      //   // @TODO:
      //   const newGioHang = state.gioHang.filter(
      //     // @TODO:
      //     (item) => item.maSP !== action.payload
      //   );

      //   // @TODO:
      //   state.gioHang = newGioHang;
      // }

      const newGioHang = state.gioHang.filter(
        (item) => item.maSP !== action.payload
      );

      state.gioHang = newGioHang;
      return { ...state };
    }
    case PHONE_SHOP_TYPE.ThayDoiSoLuongSP: {
      const { quantity, maSP } = action.payload;
      const sanPham = state.gioHang.find((item) => item.maSP === maSP);
      if (!sanPham) return state;
      // giảm số lượng và số lượng đang = 1;
      if (sanPham.soLuong === 1 && quantity === -1) {
        const newGioHang = state.gioHang.filter((i) => i.maSP !== maSP);
        state.gioHang = newGioHang;
        return { ...state };
      }
      // tăng số lượng
      sanPham.soLuong += quantity;
      // tại dòng này. thì gioHang đang cùng địa chỉ => không render lại
      // tạo ra newGioHang clone state.gionHang;
      const newGioHang = [...state.gioHang];
      // sau khi clone xong thì gắng lại cho state.gioHang
      state.gioHang = newGioHang;
      // C2:
      // state.gioHang = [...state.gioHang];
      return { ...state };
    }
    case PHONE_SHOP_TYPE.ConfirmXoaSP: {
      state.modal = action.payload;
      return { ...state };
    }
    case PHONE_SHOP_TYPE.ResetModal: {
      state.modal = null;
      return { ...state }; // redux phân biệt được state cũ và state mới để cập nhật lại state => state được dùng chỗ nào thì react sẽ tự động render để cập nhật state mới nhất
    }
    default:
      return state;
  }
};
