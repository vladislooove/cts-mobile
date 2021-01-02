// Libs
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const CCG = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      {...props}
    >
      <Path d="M16.007 0C9.721 0 4.578 5.04 4.578 11.2c0 8.4 11.429 20.8 11.429 20.8s11.429-12.4 11.429-20.8c0-6.16-5.143-11.2-11.429-11.2m0 15.2c-2.285 0-4.082-1.76-4.082-4s1.796-4 4.082-4 4.082 1.76 4.082 4-1.796 4-4.082 4" />
    </Svg>
  )
}

export default CCG;

