// Libs
import React, { FC } from 'react';
import Svg, { Path, G, Ellipse } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Gynae: FC<SystemIconProps> = ({
  active,
  ...props
}) => (
  <Svg
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      d="M35.299 46.891l.695-4.376c2.323-2.247 3.349-2.934 3.879-6.209 2.713-2.381 4.434-5.168 4.434-9.061 0-7.173-4.528-9.126-11.701-9.126-7.173 0-12.989 1.952-12.989 9.126 0 3.892 1.721 6.68 4.433 9.061.53 3.275 1.556 3.963 3.879 6.21l.695 4.376M5.108 27.016c-.256-5.055 3.034-8.695 7.771-8.744 2.941-.03 5.787 1.054 8.311 2.591"
    />
    <Ellipse
      cx={6.287}
      cy={30.541}
      fill="none"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      rx={5.572}
      ry={4.058}
      transform="rotate(-27.485 6.287 30.541)"
    />
    <G fill="none">
      <Path
        stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
        strokeWidth={2}
        d="M58.892 26.77c.256-5.055-3.034-8.695-7.771-8.744-2.941-.03-5.787 1.054-8.311 2.591"
      />
      <Ellipse
        cx={57.713}
        cy={30.295}
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}
          rx={5.572}
        ry={4.058}
        transform="rotate(-152.515 57.715 30.296)"
      />
    </G>
  </Svg>
);

export default Gynae;

