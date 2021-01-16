// Libs
import React, { FC } from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

export const Governance: FC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 85.04 85.04"
    {...props}
  >
    <Path
      d="M37.78 51.84a10.58 10.58 0 01-21.16 0zM67.65 51.84a10.58 10.58 0 11-21.16 0z"
      stroke="#009fe3"
      fill="none"
      strokeMiterlimit={10}
      strokeWidth={1.2}
    />
    <Path
      fill="#fff"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      stroke="#009fe3"
      d="M27.24 36.2h29.88"
    />
    <Path
      d="M16.62 51.84L27.2 36.5l10.58 15.34M46.49 51.84L57.07 36.5l10.58 15.34"
      stroke="#009fe3"
      fill="none"
      strokeMiterlimit={10}
      strokeWidth={1.2}
    />
    <Path
      d="M42.18 62.39V31.57"
      stroke="#e5005b"
      fill="none"
      strokeMiterlimit={10}
      strokeWidth={1.2}
    />
    <Circle
      cx={42.18}
      cy={28.06}
      r={3.53}
      transform="rotate(-85.05 42.182 28.057)"
      stroke="#e5005b"
      fill="none"
      strokeMiterlimit={10}
      strokeWidth={1.2}
    />
  </Svg>
);

export default Governance;

