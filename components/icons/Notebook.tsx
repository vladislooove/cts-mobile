// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const NoteBook: FC<SvgProps> = (props) => (
  <Svg
      viewBox="0 0 64 64"
      {...props}
    >
    <Path
      fill="none"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M11 1h42v62H11zM41 1v61M15 16H7M15 8H7M15 24H7M15 32H7M15 40H7M15 48H7M15 56H7"
    />
  </Svg>
);

export default NoteBook;

