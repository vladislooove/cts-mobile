// Libs
import React, { FC } from 'react';
import Svg, { Path, G } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Bones: FC<SystemIconProps> = ({
  active,
  ...props
}) => (
  <Svg
    viewBox="0 0 64 64"
    {...props}
  >
    <G fill="none">
      <Path
        stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
        strokeWidth={2}
        d="M53.347 18.997L63 9.344 54.656 1l-9.653 9.653a6.781 6.781 0 00-9.13 10.012c1.516 1.516 3.569 2.134 5.547 1.915-.22 1.977.399 4.03 1.915 5.547a6.783 6.783 0 0010.012-9.13z"
      />
      <Path
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}
        d="M28.657 35.661a10.17 10.17 0 014.77 2.69c3.252 3.252 3.872 8.156 1.857 12.037l.222-.043a18.28 18.28 0 009.478-5.042 18.275 18.275 0 005.042-9.478l.043-.222c-3.881 2.014-8.785 1.395-12.037-1.857a10.17 10.17 0 01-2.69-4.77 10.17 10.17 0 01-4.77-2.69c-3.252-3.252-3.872-8.156-1.857-12.037l-.222.043c-3.473.672-6.788 2.353-9.478 5.042s-4.37 6.005-5.042 9.478l-.043.222c3.881-2.014 8.785-1.395 12.037 1.857a10.166 10.166 0 012.69 4.77z"
      />
      <Path
        stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
        strokeWidth={2}
        d="M28.127 52.928a6.783 6.783 0 000-9.593c-1.516-1.516-3.569-2.135-5.547-1.915.219-1.977-.399-4.03-1.915-5.547a6.783 6.783 0 00-10.012 9.13L1 54.656 9.344 63l9.653-9.653a6.782 6.782 0 009.13-.419z"
      />
    </G>
  </Svg>
);

export default Bones;

