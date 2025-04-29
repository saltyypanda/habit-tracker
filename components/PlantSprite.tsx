import {
  Skia,
  Canvas,
  Atlas,
  useRectBuffer,
  useImage,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const { spriteWidth, spriteHeight } = { spriteWidth: 1000, spriteHeight: 1000 }

export default function PlantSprite() {
  const counter = useSharedValue(0);
  useEffect(() => {
    const interval = setInterval(() => {
      counter.value = (counter.value + 1) % 2;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const spriteMap = useImage(require("@/assets/idle_sprite_sheet.png"));

  const numberOfSprites = 1;
  const sprites = useRectBuffer(numberOfSprites, (rect, i) => {
    "worklet";
    let frameSelect;
    frameSelect = 1000 * Math.floor(counter.value);
    rect.setXYWH(frameSelect, 0, 1000, 1000);
  });

  const transforms = [Skia.RSXform(1, 0, width / 2 - spriteWidth / 2, height / 2 - spriteHeight / 2)];

  return (
    <Canvas style={{ flex: 1 }}>
      <Atlas image={spriteMap} sprites={sprites} transforms={transforms} />
    </Canvas>
  );
}
