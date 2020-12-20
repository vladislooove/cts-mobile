// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const ArrowRight: FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="M6.406 1.94L8.476 0l17.13 16-17.13 16-2.07-1.93L21.456 16 6.406 1.94" />
  </Svg>
);

export default ArrowRight;

