// Libs
import React, { FC } from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg'

export const Resources: FC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 85.04 85.04"
    {...props}
  >
    <Rect
      x={26.27}
      y={24.66}
      width={28.04}
      height={37.63}
      rx={1}
    />
    <Path
      d="M44.73 55.89h-7.59a1.29 1.29 0 01-1.29-1.29V32.35a1.29 1.29 0 011.29-1.29h7.59v7.83h-4.79v9.08h4.83z"
      stroke="#e5005b"
      fill="none"
      strokeMiterlimit={10}
      strokeWidth={1.2}
    />
    <Path
      d="M22.45 33.58h7.71M22.38 43.47h7.72M22.38 53.37h7.72"
    />
  </Svg>
);

export default Resources;

