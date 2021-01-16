// Libs
import React, { FC } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg'

export const Search: FC<SvgProps> = (props) => (
  <Svg
    viewBox="23 23 39 39"
    {...props}
  >
    <Path
      d="M49.38 30.13c4.44 6.06 2.71 14.21-2.93 19.2s-14.7 3.18-19.2-2.93a13.73 13.73 0 1122.13-16.27zM48.25 48.2l12.31 12.31"
    />
  </Svg>
);

export default Search;

