import { BAN_CHON, GAME_XUC_XAC } from "./game-xuc-xac.const";

const STATE_DEFAULT = {
  listXucXac: [
    {
      image: "/images/game-xuc-xac/1.png",
      diem: 1,
    },
    {
      image: "/images/game-xuc-xac/2.png",
      diem: 2,
    },
    {
      image: "/images/game-xuc-xac/5.png",
      diem: 5,
    },
  ],
  banChon: BAN_CHON.TAI,
  soBanThang: 0,
  tongSoManChoi: 0,
};

export const gameXucXacReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case GAME_XUC_XAC.CHON_TAI_XIU: {
      state.banChon = action.payload;
      return { ...state };
    }
    case GAME_XUC_XAC.PLAY_GAME: {
      /**
       * 1. Rung lại xúc xắc, thay đổi listXucXac
       * 2. Tính điểm, xem thử người dùng chọn đúng hay sai => để tăng soBanThang
       * 3. Tăng tổng số màn chơi.
       */

      // 3 - 10: Xỉu
      // 11 - 18: Tài

      //1.
      const newListXucXac = [];
      let tongDiem = 0;

      for (let i = 0; i < 3; i++) {
        const diem = Math.floor(Math.random() * 6) + 1;
        const image = `/images/game-xuc-xac/${diem}.png`;

        newListXucXac.push({
          diem,
          image,
        });

        tongDiem += diem;
        /**
         * Math.random(): chạy từ 0 đến bé hơn 1 => 0.242342, 0.92342,...
         * Math.random() * 6: chạy từ 0 đến bé hơn 6 => 0.3423423, 5.2342342,....
         * Math.floor(Math.random() * 6): chuyển về số nguyên => 0,1,2,3,4,5.
         * Math.floor(Math.random() * 6) + 1 => 1,2,3,4,5,6
         */
      }

      state.listXucXac = newListXucXac;

      // 2.
      if (
        (tongDiem <= 10 && tongDiem >= 3 && state.banChon === BAN_CHON.XIU) ||
        (tongDiem <= 18 && tongDiem >= 11 && state.banChon === BAN_CHON.TAI)
      ) {
        state.soBanThang += 1;
      }

      // 3.
      state.tongSoManChoi += 1;

      return { ...state };
    }
    default:
      return state;
  }
};
