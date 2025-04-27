export const plantSprite = {
    name: 'plant',
    size: { width: 1000, height: 1000 },
    animationTypes: ['IDLE', 'BOUNCE'],
    frames: [
      require('../animation-1/actual_middle.png'),
      require('../animation-1/IMG_1652.png'),
    //   require('../images/plant/bounce_0.png'),
    //   require('../images/plant/bounce_1.png'),
    //   require('../images/plant/bounce_2.png'),
    //   require('../images/plant/bounce_3.png'),
      // continue listing bounce frames
    ],
    animationIndex: (animationType: string) => {
      switch (animationType) {
        case 'IDLE':
          return [0, 1]; // indexes into the frames array
        case 'BOUNCE':
          return [2, 3, 4, 5, 6, 7, 8, 9, 10]; // bounce frames
        default:
          return [0];
      }
    },
  };
  