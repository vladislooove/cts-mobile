// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  loaderWrapper: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
  },
  appWrapper: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
});
