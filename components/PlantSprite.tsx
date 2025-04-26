import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

// CONFIG
const IDLE_FRAMES = 2;
const BOUNCE_FRAMES = 22;
const IDLE_WIDTH = 1000;
const IDLE_FRAME_DURATION = 800;
const BOUNCE_FRAME_DURATION = 30; // faster bounce frames

const IDLE_SHEET = require('../assets/idle_sprite_sheet.png');
const BOUNCE_SHEET = require('../assets/bounce_sprite_sheet.png');

export default function PlantSprite() {
  const [mode, setMode] = useState<'idle' | 'bounce'>('idle');
  const translateX = useRef(new Animated.Value(0)).current;
  const frameIndex = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startIdle();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startIdle = () => {
    frameIndex.current = 0;
    translateX.setValue(-302);
    setMode('idle');

    intervalRef.current = setInterval(() => {
      frameIndex.current = (frameIndex.current + 1) % IDLE_FRAMES;
      translateX.setValue(-frameIndex.current * IDLE_WIDTH - 302);
    }, IDLE_FRAME_DURATION);
  };

  const startBounce = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    frameIndex.current = 0;
    translateX.setValue(-302);
    setMode('bounce');

    intervalRef.current = setInterval(() => {
      frameIndex.current += 1;
      if (frameIndex.current >= BOUNCE_FRAMES) {
        clearInterval(intervalRef.current!);
        startIdle(); // after bouncing, go back to idle
      } else {
        translateX.setValue(-frameIndex.current * IDLE_WIDTH - 302);
      }
    }, BOUNCE_FRAME_DURATION);
  };

  const getSpriteSheet = () => {
    return mode === 'idle' ? IDLE_SHEET : BOUNCE_SHEET;
  };

  const getTotalWidth = () => {
    return (mode === 'idle' ? IDLE_FRAMES : BOUNCE_FRAMES) * IDLE_WIDTH;
  };

  return (
    <TouchableWithoutFeedback onPress={startBounce}>
      <View style={styles.frame}>
        <View style={styles.dot} />
        <Animated.Image
          source={getSpriteSheet()}
          style={[
            styles.sprite,
            {
              width: getTotalWidth(),
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderWidth: 10,
    borderColor: 'blue',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'red',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -3 }, { translateY: -3 }],
    zIndex: 10,
  },
  sprite: {
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
});
