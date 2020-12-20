// Libs
import React, { FC } from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg'

export const More: FC<SvgProps> = (props) => (
  <Svg viewBox="16 16 52 52" {...props}>
    <Circle
      transform="rotate(-4.186 27.31 42.994)"
      cx={27.32}
      cy={43.01}
      r={4.53}
    />
    <Circle
      transform="rotate(-4.186 42.632 42.816)"
      cx={42.65}
      cy={42.83}
      r={4.53}
    />
    <Circle
      transform="rotate(-4.186 57.956 42.816)"
      cx={57.97}
      cy={42.83}
      r={4.53}
    />
  </Svg>
);

export default More;

