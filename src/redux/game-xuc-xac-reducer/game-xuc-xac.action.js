import { GAME_XUC_XAC } from "./game-xuc-xac.const";

export const chonTaiXiuCreator = (payload) => {
  return {
    type: GAME_XUC_XAC.CHON_TAI_XIU,
    payload,
  };
};

export const playGameCreator = (payload) => {
  return {
    type: GAME_XUC_XAC.PLAY_GAME,
    payload,
  };
};
