// Libs
import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg'

export const EyeThrough: FC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      d="M8.109 20.891C4.617 18.831 3 16 3 16s4-7 13-7c1.305 0 2.504.147 3.601.399L16.9 12.1a4 4 0 00-4.797 4.797l-3.993 3.993zm4.29 1.71c1.097.252 2.296.399 3.601.399 9 0 13-7 13-7s-1.617-2.83-5.109-4.891L19.9 15.1a4 4 0 01-4.797 4.797l-2.703 2.703zM19 16a2.99 2.99 0 01-.879 2.121A2.99 2.99 0 0116 19l3-3zm-3-3a2.99 2.99 0 00-2.121.879A2.99 2.99 0 0013 16l3-3zm8-6L7 24l1 1L25 8l-1-1z"
      fillRule="evenodd"
    />
  </Svg>
);

export default EyeThrough;

