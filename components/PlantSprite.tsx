import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';
import { plantSprite } from '../assets/sprites/plantSprite';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const spriteWidth = 1000;
const spriteHeight = 1000;

export default function PlantSprite() {
  const [animationType, setAnimationType] = useState<'IDLE' | 'BOUNCE'>('IDLE');

  const handlePress = () => {
    if (animationType === 'IDLE') {
      // setAnimationType('BOUNCE');
      setTimeout(() => {
        setAnimationType('BOUNCE');
      }, 4);
      setAnimationType('IDLE');
    }
  };

  const handleAnimationFinish = () => {
    if (animationType === 'BOUNCE') {
      setAnimationType('IDLE');
    }
  };

  return (
    <View style={styles.container}>
      <AnimatedSprite
        key={animationType}
        sprite={plantSprite}
        animationFrameIndex={plantSprite.animationIndex(animationType)}
        loopAnimation={animationType === 'IDLE'}
        fps={5}
        coordinates={{
          top: (screenHeight / 2) - (spriteHeight / 2),
          left: (screenWidth / 2) - (spriteWidth / 2),
        }}
        size={{ width: spriteWidth, height: spriteHeight }}
        // onAnimationFinish={handleAnimationFinish}
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
