// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Warning: FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M32 10.5A21.52 21.52 0 0010.5 32c1.18 28.52 41.82 28.51 43 0A21.52 21.52 0 0032 10.5zm-1.5 12.64a1.5 1.5 0 013 0v12a1.5 1.5 0 01-3 0zM32 41.88a1.59 1.59 0 010-3.18 1.59 1.59 0 010 3.18z"
      data-name="Layer 84"
    />
  </Svg>
);

export default Warning;

