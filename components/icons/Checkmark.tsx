// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Checkmark: FC<SvgProps> = (props) => (
  <Svg
    fill="#dfe0e1"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M11.377 27.415c-.37.37-.895.679-1.358.679s-.988-.324-1.374-.695L.001 18.755l2.748-2.748 7.286 7.286L29.3 3.889l2.701 2.794-20.623 20.731" />
  </Svg>
);

export default Checkmark;

