// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Eye: FC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M17 9C8 9 4 16 4 16s4 7 13 7 13-7 13-7-4-7-13-7zm0 11a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 100-2 1 1 0 000 2z"
      fillRule="evenodd"
    />
  </Svg>
);

export default Eye;

