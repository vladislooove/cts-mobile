// Libs
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Treatment = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      {...props}
    >
      <Path d="M19.357 21.683V3.32c0-1.835-1.499-3.32-3.356-3.32s-3.356 1.485-3.356 3.32v18.335a5.705 5.705 0 00-2.349 4.634c0 3.156 2.57 5.712 5.726 5.712a5.697 5.697 0 003.334-10.317M14.931 3.32c0-.571.478-1.035 1.071-1.035s1.071.464 1.071 1.035v3.541h-2.142V3.32m2.213 14.965h-1.142v-1.142h1.142v1.142m0-2.285h-1.142v-4.569h1.142V16" />
    </Svg>
  )
}

export default Treatment;

