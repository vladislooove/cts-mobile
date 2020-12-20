// Libs
import React, { FC } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg'

export const Home: FC<SvgProps> = (props) => (
  <Svg
    viewBox="21 23 40 40"
    {...props}
  >
    <Path
      d="M22.36 46.21l18.89-19.88L60.4 45.47"
    />
    <Path
      d="M28.72 39.28v18.47c0 .97.79 1.76 1.76 1.76h6.86v-11h8.09V59.5h6.73c.97 0 1.76-.79 1.76-1.76V39.28"
    />
  </Svg>
);

export default Home;

