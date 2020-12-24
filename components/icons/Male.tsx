// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Male: FC<SvgProps> = (props) => (
  <Svg viewBox="27 25 30 35" {...props}>
    <Path
      d="M39 54.36a8.3 8.3 0 118.28-8.29A8.3 8.3 0 0139 54.36m17.74-25a1 1 0 00-.07-.29 1.48 1.48 0 00-.16-.27v-.05a1.15 1.15 0 00-.23-.21 1.11 1.11 0 00-.27-.13h-.08a1.06 1.06 0 00-.31-.05h-8.37a1.19 1.19 0 000 2.37h5.43l-7.07 7.07A10.55 10.55 0 0039 35.42a10.65 10.65 0 108.32 4l7.07-7.07v5.44a1.19 1.19 0 002.37 0V29.5v-.08a.22.22 0 000-.08"
    />
  </Svg>
);

export default Male;

