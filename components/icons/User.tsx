// Libs
import React, { FC } from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

export const User: FC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 85.04 85.04"
    {...props}
  >
    <Path
      d="M43.69 23.41a4.83 4.83 0 01-.53 9.65"
      stroke="#e5005b"
      fill="none"
      strokeMiterlimit={10}
      strokeWidth={1.2}
    />
    <Circle cx={43.42} cy={28.24} r={9.03} />
    <Path
      d="M29.82 59.45V45.52c0-2.78 1.81-5.05 4-5.05H53c2.21 0 4 2.27 4 5.05v13.93z"
    />
  </Svg>
);

export default User;

