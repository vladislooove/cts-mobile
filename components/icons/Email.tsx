// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps, Rect } from 'react-native-svg'

export const Email: FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 47.25 32" {...props}>
    <Rect
      x={1}
      y={1}
      width={45.25}
      height={30}
      rx={1}
    />
    <Path
      d="M46.25 2l-22 17.78a1 1 0 01-1.29 0L1 2M2 31l16.55-15M45.5 31L28.95 16"
    />
  </Svg>
);

export default Email;

