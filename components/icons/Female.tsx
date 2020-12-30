// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Female: FC<SvgProps> = (props) => (
  <Svg viewBox="27 25 30 35" {...props}>
    <Path
      d="M51 38a8.7 8.7 0 11.18-1.71A9.5 9.5 0 0151 38m2.3-3.84a10.15 10.15 0 00-.63-2 10.57 10.57 0 00-1-1.91 11.21 11.21 0 00-3.05-3.05 10.91 10.91 0 00-3.95-1.64 11.16 11.16 0 00-4.31 0 10.86 10.86 0 00-3.94 1.64 11.21 11.21 0 00-3.05 3.05 11 11 0 00-1.64 3.94 11.16 11.16 0 000 4.31 11.18 11.18 0 009.2 8.76.45.45 0 01.4.45v3.11a.44.44 0 01-.44.44H36.3a1.2 1.2 0 00-.84.34 1.18 1.18 0 000 1.63 1.14 1.14 0 00.39.25 1.17 1.17 0 00.45.09h4.6a.44.44 0 01.31.13.42.42 0 01.12.3v4.61a1.13 1.13 0 00.34.84 1.07 1.07 0 00.39.26 1.19 1.19 0 001.29-.26 1 1 0 00.25-.45 1.17 1.17 0 00.09-.45V54a.4.4 0 01.13-.31.37.37 0 01.3-.12h4.6a1.13 1.13 0 00.45-.09 1.07 1.07 0 00.4-.26 1.14 1.14 0 00.25-.39 1.17 1.17 0 000-.9 2.12 2.12 0 00-.11-.21l-.16-.15a1.16 1.16 0 00-.83-.34h-4.61a.48.48 0 01-.31-.13.43.43 0 01-.12-.31v-3.1a.41.41 0 01.11-.28.37.37 0 01.26-.15 10.69 10.69 0 003.36-1 11 11 0 005.27-5.65 10.75 10.75 0 00.63-2.07 11.11 11.11 0 000-4.3"
    />
  </Svg>
);

export default Female;
