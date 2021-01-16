// Libs
import React, { FC } from 'react';
import Svg, { Path, Circle } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Breast: FC<SystemIconProps> = ({
  active,
  ...props
}) => (
  <Svg
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      fill="none"
      d="M9.167 21.397c.305.467 7.383 11.571 1.078 22.934l-.108.176c-3.824 5.672-5.506 10.609-6.244 13.752-.76 3.237-.684 5.183-.683 5.201"
    />
    <Circle
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      cx={14.708}
      cy={12.327}
      r={3.001}
      fill="none"
    />
    <Path
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      fill="none"
      d="M61.538 63.482c.005-.141.233-8.345-6.927-18.964l-.108-.176c-6.304-11.362.773-22.467 1.078-22.934"
    />
    <Circle
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      cx={50.317}
      cy={12.327}
      r={3.001}
      fill="none"
    />
    <Path
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      fill="none"
      d="M28.524 12.328a11.893 11.893 0 01-.912 4.527 11.872 11.872 0 01-2.572 3.832 11.785 11.785 0 01-8.358 3.41 11.825 11.825 0 01-4.492-.922 11.868 11.868 0 01-3.792-2.562 11.758 11.758 0 01-2.529-3.806 11.773 11.773 0 01-.881-4.478c0-1.536.297-3.063.881-4.478a11.768 11.768 0 012.529-3.806 11.83 11.83 0 013.792-2.562m40.645-.001a11.868 11.868 0 013.792 2.562 11.747 11.747 0 012.529 3.806c.583 1.415.881 2.942.881 4.478 0 1.536-.297 3.063-.881 4.478a11.768 11.768 0 01-2.529 3.806 11.83 11.83 0 01-3.792 2.562 11.825 11.825 0 01-4.492.922 11.775 11.775 0 01-8.358-3.41 11.888 11.888 0 01-2.572-3.832 11.907 11.907 0 01-.912-4.526"
    />
  </Svg>
);

export default Breast;

