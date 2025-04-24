import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import PlantDisplay from './PlantDisplay';

const { width, height } = Dimensions.get('window');

const plantFrames = [
  require("../assets/images/round-plant-2-1.png"),
  require("../assets/images/round-plant-2-2.png"),
];

export default function StackedBackground() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/daytime-background.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Image
        source={require('../assets/images/wall.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Image
        source={require('../assets/images/pot.png')}
        style={styles.image}
        resizeMode="cover"
      />
      {/* <Image
        source={require('../assets/images/round-plant-1-2.png')}
        style={styles.image}
        resizeMode="cover"
      /> */}
      <PlantDisplay frames={plantFrames} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
