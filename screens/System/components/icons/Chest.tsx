// Libs
import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Chest: FC<SystemIconProps> = ({
  active,
  ...props
}) => (
  <Svg
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      fill="#FFF"
      d="M32.478 24.302V.658"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
    />
    <Path
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      fill="none"
      d="M22.479 17.949c-1.386 0-3.03.376-4.878 1.123-9.954 4.025-13.047 16.04-13.077 16.161l-.015.057c-.04.145-3.924 14.683.59 22.433 1.277 2.192 3.093 3.563 5.551 4.191 5.108 1.305 9.134.892 11.966-1.226 4.014-3.004 4.549-8.547 4.615-10.248V21.314c-.166-.516-.769-2.045-2.275-2.828-.69-.359-1.522-.537-2.477-.537zm7.244 32.537h.003-.003z"
    />
    <Path
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      fill="none"
      d="M10.379 40.303l8.602.023 13.497-16.024"
    />
    <Path
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      fill="#FFF"
      d="M21.207 37.684l-6.64-6.64m4.339 9.282v9.315"
    />
    <Path
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      fill="none"
      d="M40 18.486c-1.506.783-2.109 2.312-2.275 2.828V50.44c.067 1.701.601 7.244 4.615 10.248 2.831 2.119 6.857 2.531 11.966 1.226 2.459-.628 4.275-1.999 5.551-4.191 4.514-7.751.629-22.289.59-22.433l-.015-.057c-.03-.121-3.123-12.135-13.077-16.161-1.848-.747-3.492-1.123-4.878-1.123-.955 0-1.787.178-2.477.537zm-4.77 32h.003-.003z"
    />
    <Path
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      fill="none"
      d="M54.576 40.303l-8.601.023-13.497-16.024"
    />
    <Path
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      fill="#FFF"
      d="M43.749 37.684l6.64-6.64m-4.339 9.282v9.315"
    />
  </Svg>
);

export default Chest;

