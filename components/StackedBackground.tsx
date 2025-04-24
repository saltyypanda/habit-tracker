import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import PlantDisplay from './PlantDisplay';
import { Backgrounds } from '@/constants/Backgrounds';

const { width, height } = Dimensions.get('window');

const plantFrames = [
  require("../assets/images/round-plant-2-1.png"),
  require("../assets/images/round-plant-2-2.png"),
];

function getCurrentBackground(): any {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 17) return Backgrounds.Daytime;
  if (hour >= 17 && hour < 20) return Backgrounds.Sunset;
  return Backgrounds.Nighttime;
}

export default function StackedBackground() {
  const backgroundImage = getCurrentBackground();

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
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
