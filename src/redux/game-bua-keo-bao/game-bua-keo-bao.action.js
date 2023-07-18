import { GAME_BKB } from "./game-bua-keo-bao.const";

export const chonCreator = (payload) => {
  return {
    type: GAME_BKB.CHON,
    payload,
  };
};

export const playGameCreator = () => {
  return {
    type: GAME_BKB.PLAY_GAME,
  };
};
