// Libs
import React, { FC } from 'react';
import Svg, { Path, G, Ellipse } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Haem: FC<SystemIconProps> = ({
  active,
  ...props
}) => (
  <Svg
    viewBox="0 0 64 64"
    {...props}
  >
    <G fill="none">
      <Ellipse
        cx={15.524}
        cy={20.324}
        stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
        strokeWidth={2}
        rx={16.888}
        ry={10.591}
        transform="rotate(139.319 15.525 20.326)"
      />
      <Path
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}
        d="M7.803 23.364c1.724 2.006 5.715 1.403 8.914-1.346s4.394-6.605 2.67-8.611"
      />
      <Ellipse
        cx={46.6}
        cy={25.237}
        stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
        strokeWidth={2}
        rx={16.888}
        ry={10.591}
        transform="rotate(161.598 46.597 25.235)"
      />
      <Path
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}
        d="M38.882 24.541c.777 2.334 4.423 3.223 8.145 1.984 3.722-1.238 6.109-4.134 5.333-6.469"
      />
      <Ellipse
        cx={26.441}
        cy={47.113}
        stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
        strokeWidth={2}
        rx={16.888}
        ry={10.591}
        transform="rotate(-159.844 26.44 47.11)"
      />
      <Path
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}
        d="M20.243 41.541c-.913 2.487 1.562 5.683 5.527 7.138s7.92.619 8.832-1.868"
      />
    </G>
  </Svg>
);

export default Haem;

