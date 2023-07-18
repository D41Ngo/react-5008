import { CHON, GAME_BKB } from "./game-bua-keo-bao.const";

const STATE_DEFAULT = {
  ironman: CHON.BUA,
  thanos: CHON.BAO,
  soBanThang: 0,
  tongSoManChoi: 10,
};

export const gameBuaKeoBaoReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case GAME_BKB.CHON: {
      state.ironman = action.payload;
      return { ...state };
    }

    // if ( ironman > thanos && Math.abs(ironman - thanos) === 1 )  =========> dung
    default:
      return state;
  }
};
