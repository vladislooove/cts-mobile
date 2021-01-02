// Libs
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Info = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 32 32"
      {...props}
    >
      <Path d="M14.115 9.538a1.538 1.538 0 103.077 0 1.538 1.538 0 10-3.077 0m3.116 13.231v-9.846h-3.692v.615h1.231v9.231h-1.231v.615h4.923v-.615h-1.231M16 0C7.162 0 0 7.162 0 16s7.162 16 16 16c8.838 0 16-7.162 16-16S24.838 0 16 0m0 30.669C7.915 30.669 1.331 24.092 1.331 16 1.331 7.915 7.908 1.331 16 1.331c8.085 0 14.669 6.577 14.669 14.669 0 8.085-6.585 14.669-14.669 14.669" />
    </Svg>
  )
}

export default Info;

