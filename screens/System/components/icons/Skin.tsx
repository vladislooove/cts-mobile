// Libs
import React, { FC } from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Skin: FC<SystemIconProps> = ({
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
        d="M28.898 31.632c-2.431 5.612-6.276 13.302-1.573 18.91 2.325 2.772 6.713 3.568 9.831 1.734 3.118-1.835 4.547-6.116 3.096-9.43-1.445-3.303-4.02-5.509-4.667-9.211-.802-4.595.735-9.528 1.551-14.013.735-4.036 1.534-11.348-.886-14.911-.401 5.247-1.332 9.463-2.313 13.232-1.23 4.729-3.101 9.216-5.039 13.689z"
      />
      <Circle
        cx={57.729}
        cy={54.111}
        r={2.766}
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}
       />
      <Circle
        cx={8.437}
        cy={45.135}
        r={2.766}
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}  
      />
      <Circle
        cx={13.361}
        cy={54.837}
        r={3.452}
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}  
      />
      <Circle
        cx={53.03}
        cy={43.987}
        r={3.452}
        stroke={active ? COLOR_PRIMARY : COLOR_PINK}
        strokeWidth={2}  
      />
      <Path
        stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
        strokeWidth={2}
        d="M63 36.588H42.439c.79 1.207 1.686 2.575 2.417 4.245 2.445 5.588.134 12.664-5.151 15.773-1.871 1.102-4.054 1.684-6.311 1.684-3.837 0-7.544-1.689-9.918-4.518-4.449-5.306-3.775-11.58-2.098-16.854H1"
      />
    </G>
  </Svg>
);

export default Skin;

