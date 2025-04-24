import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const PlantDisplay = ({ frames }: { frames: any[] }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 600); // switch every 800ms

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <Image
      source={frames[frameIndex]}
      style={styles.image}
      resizeMode="cover"
    />
  );
};

export default PlantDisplay;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
