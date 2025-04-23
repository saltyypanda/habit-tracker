import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const plantFrames = [
  require('../assets/images/round-plant-1.png'),
  require('../assets/images/round-plant-3.png'),
];

const PlantDisplay = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev === 0 ? 1 : 0));
    }, 800); // switch every 800ms

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={plantFrames[frameIndex]}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default PlantDisplay;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
