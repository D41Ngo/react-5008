import ironMan from "../../modules/game-bua-keo-bao/components/iron-man/iron-man";
import { CHON, GAME_BKB } from "./game-bua-keo-bao.const";

const STATE_DEFAULT = {
  ironman: CHON.BUA,
  thanos: CHON.BUA,
  soBanThang: 0,
  tongSoManChoi: 0,
};

export const gameBuaKeoBaoReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case GAME_BKB.CHON: {
      state.ironman = action.payload;
      return { ...state };
    }

    case GAME_BKB.PLAY_GAME: {
      const ketQuaThanos = Math.floor(Math.random() * 3) + 1;
      state.thanos = ketQuaThanos;

      // 0 < x < 1
      // 0 * 3 < x < 1 * 3
      // 0 < x < 3
      // 0,1,2 + 1
      // 0.2131231 2.312312321
      // 0 -> 2

      if (
        (state.ironman === CHON.BUA && state.thanos === CHON.KEO) ||
        (state.ironman === CHON.BAO && state.thanos === CHON.BUA) ||
        (state.ironman === CHON.KEO && state.thanos === CHON.BAO)
      ) {
        state.soBanThang += 1;
      }

      state.tongSoManChoi += 1;

      return { ...state };
    }

    // if ( ironman > thanos && Math.abs(ironman - thanos) === 1 )  =========> dung
    default:
      return state;
  }
};
