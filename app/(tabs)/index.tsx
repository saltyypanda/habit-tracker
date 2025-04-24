import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PlantDisplay from "@/components/PlantDisplay";
import Wall from "@/components/Wall";
import StackedBackground from "@/components/StackedBackground";

const plantFrames = [
  require("../../assets/images/round-plant-1-1.png"),
  require("../../assets/images/round-plant-1-2.png"),
];

export default function HomeScreen() {
  return (
    <>
      <StackedBackground />
    </>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
// });
