// Libs
import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg'

// Styles
import { COLOR_PINK, COLOR_PRIMARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { SystemIconProps } from './types';

export const Urology: FC<SystemIconProps> = ({
  active,
  ...props
}) => (
  <Svg
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      fill="#FFF"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      d="M24.271 29.05l-5.179-5.179m-.209 10.567l5.388-5.388"
    />
    <Path
      fill="none"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      d="M28.938 52.982v-14.84c0-5.233-1.074-8.699-4.98-9.11"
    />
    <Path
      fill="#FFF"
      d="M23.958 29.033h-5.846"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
    />
    <Path
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      d="M16.52 32.407c-.013-.142.008-.329.059-.596.19-.985 1.046-1.635 1.044-2.818-.002-1.059-.598-1.65-.859-2.573-.346-1.22-.498-.795.74-1.668 2.534-1.786 3.705-4.718 2.027-7.634-3.752-6.518-10.995-2.481-14.68 1.889C2.332 21.996 1 25.857 1 30.173c0 4.35 2.387 7.663 4.389 9.676 2.857 2.873 5.988 5.456 10.117 4.245 1.942-.569 3.648-1.998 4.41-3.874 1.103-2.716.061-5.224-2.216-6.815-.788-.549-1.139-.571-1.18-.998z"
    />
    <Path
      fill="#FFF"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      d="M39.729 29.05l5.475-5.475M44.979 34.3l-5.25-5.25"
    />
    <Path
      fill="none"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
      d="M34.153 52.982v-14.84c0-7.401 4.406-8.954 5.889-9.11"
    />
    <Path
      fill="#FFF"
      d="M40.042 29.033h6.335"
      stroke={active ? COLOR_PRIMARY : COLOR_PINK}
      strokeWidth={2}
    />
    <Path
      fill="none"
      stroke={active ? COLOR_WHITE : COLOR_PRIMARY}
      strokeWidth={2}
      d="M47.48 32.407c.013-.142-.008-.329-.059-.596-.19-.985-1.046-1.635-1.044-2.818.002-1.059.598-1.65.859-2.573.346-1.22.498-.795-.74-1.668-2.534-1.786-3.705-4.718-2.027-7.634 3.752-6.518 10.995-2.481 14.68 1.889C61.668 21.996 63 25.857 63 30.173c0 4.35-2.387 7.663-4.389 9.676-2.857 2.873-5.988 5.456-10.117 4.245-1.942-.569-3.648-1.998-4.41-3.874-1.103-2.716-.061-5.224 2.216-6.815.788-.549 1.139-.571 1.18-.998z"
    />
  </Svg>
);

export default Urology;

