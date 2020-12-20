// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const About: FC<SvgProps> = (props) => (
  <Svg
    data-name="Layer 1"
    viewBox="0 0 85.04 85.04"
    {...props}
  >
    <Path
      d="M60.09 27.52H25a1.78 1.78 0 00-1.78 1.78v24.36A1.78 1.78 0 0025 55.44h5.17l-.26 8 9.77-8h20.41a1.78 1.78 0 001.78-1.78V29.3a1.78 1.78 0 00-1.78-1.78z"
      fill="none"
      stroke="#009fe3"
      strokeMiterlimit={10}
      strokeWidth={1.2}
    />
    <Path
      d="M43.62 35.44a1.17 1.17 0 01-2.33 0 1.16 1.16 0 011.18-1.18 1.12 1.12 0 011.15 1.18zm-2.09 13.25V38.34h1.88v10.35z"
      fill="#e5005b"
    />
  </Svg>
);

export default About;

