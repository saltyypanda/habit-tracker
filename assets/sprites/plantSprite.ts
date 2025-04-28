export const plantSprite = {
  name: "plant",
  size: { width: 1000, height: 1000 },
  animationTypes: ["IDLE", "BOUNCE"],
  frames: [
    require("../animation-1/actual_middle.png"),
    require("../animation-1/IMG_1652.png"),

    require("../animation-1/actual_middle.png"),
    require("../animation-1/IMG_1652.png"),
    require("../animation-1/IMG_1653.png"),
    require("../animation-1/bottom.png"),
    require("../animation-1/IMG_1653.png"),
    require("../animation-1/IMG_1652.png"),
    require("../animation-1/actual_middle.png"),
    require("../animation-1/middle.png"),
    require("../animation-1/IMG_1649.png"),
    require("../animation-1/IMG_1648.png"),
    require("../animation-1/IMG_1647.png"),
    require("../animation-1/IMG_1646.png"),
    require("../animation-1/top.png"),
    require("../animation-1/top.png"),
    require("../animation-1/IMG_1646.png"),
    require("../animation-1/IMG_1647.png"),
    require("../animation-1/IMG_1648.png"),
    require("../animation-1/IMG_1649.png"),
    require("../animation-1/middle.png"),
    require("../animation-1/actual_middle.png"),
    require("../animation-1/IMG_1652.png"),
    require("../animation-1/actual_middle.png"),
  ],
  animationIndex: (animationType: string) => {
    switch (animationType) {
      case "IDLE":
        return [0, 1]; // indexes into the frames array
      case "BOUNCE":
        return [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]; // bounce frames
      default:
        return [0];
    }
  },
};
