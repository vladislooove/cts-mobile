// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Resources: FC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 85.04 85.04"
    {...props}
  >
    <Path
      stroke="#e5005b"
      fill="none"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M32.59 58.69h-5.13V23.43h2.84l2.29-3h9.36l2.37 3h6.87v6.86"
    />
    <Path
      d="M56.31 63.69H32.59V28.43h17.04l6.68 8v27.26z"
    />
    <Path
      d="M49.19 29.1v7.16h6.82M36.83 41.4h15.24M36.83 35.55h7.62M36.83 46.55h15.24M36.83 51.7h15.24M36.83 56.85h15.24"
    />
  </Svg>
);

export default Resources;

