export const mapper = ["", "Búa", "Bao", "Kéo"];

export const CHON = {
  BUA: 1, // 1
  BAO: 2, // 2
  KEO: 3, // 3
};

export const GAME_BKB = {
  CHON: "GAME_BKB/CHON",
  PLAY_GAME: "GAME_BKB/PLAY_GAME",
};

// soMot soHai
// ironman: bua ----- thanos: bao
// 1  <  2 && |soMot-soHai| == 1  =====> đúng.
// ironman: bua ----- thanos: keo
// 1  <  3 && trị tuyệt đối |1-3| |3-1| > 1 thì vẫn sai
