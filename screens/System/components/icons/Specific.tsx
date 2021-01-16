// Libs
import React, { FC } from 'react';
import Svg, { Path, Circle } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Specific: FC<SystemIconProps> = ({
  active,
  ...props
}) => (
  <Svg
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      fill="none"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      d="M47.798 5.791a5.503 5.503 0 01-.604 10.988"
    />
    <Circle
      cx={17.027}
      cy={16.366}
      r={10.289}
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
    />
    <Path
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      d="M14.681 53.195H1V38.127c0-3.159 2.22-5.745 4.934-5.745h12.485"
    />
    <Path
      fill="none"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      d="M5.241 48.909v-9.133c0-1.915 1.346-3.482 2.991-3.482h3.488"
    />
    <Circle
      cx={47.496}
      cy={11.29}
      r={10.289}
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
    />
    <Path
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      d="M38.369 25.226h20.038c2.521 0 4.583 2.585 4.583 5.745V52.68H47.194M18.419 63v-9.377a3.691 3.691 0 013.681-3.681h17.528a3.691 3.691 0 013.681 3.681V63h-24.89z"
    />
    <Path
      fill="none"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      d="M39.565 60.35v-4.87c0-1.051-.86-1.912-1.912-1.912h-1.812"
    />
    <Circle
      cx={30.959}
      cy={37.011}
      r={9.057}
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
    />
  </Svg>
);

export default Specific;

