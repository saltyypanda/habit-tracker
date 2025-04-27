import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';
import { plantSprite } from '../assets/sprites/plantSprite'; // you define this object!

export default function PlantSprite() {
  return (
    <View style={styles.container}>
      <AnimatedSprite
        sprite={plantSprite}
        animationFrameIndex={plantSprite.animationIndex('IDLE')}
        loopAnimation={true}
        coordinates={{ top: 0, left: 0 }}
        size={{ width: 1000, height: 1000 }}
        onPress={() => {
          // Switch animation to bounce here
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
