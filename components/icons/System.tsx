// Libs
import React, { FC } from 'react';
import Svg, { Circle, SvgProps, Path } from 'react-native-svg'

export const System: FC<SvgProps> = (props) => (
  <Svg
    viewBox="23 24 38 38"
    {...props}
  >
    <Circle
      cx={41.73}
      cy={33.29}
      r={8.25}
    />
    <Path
      d="M26.16 60.79V50.73c0-2.53 2.07-4.6 4.6-4.6h21.92c2.53 0 4.6 2.07 4.6 4.6v10.06H26.16z"
    />
  </Svg>
);

export default System;

