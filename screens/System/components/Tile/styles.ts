// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    elevation: 2,
    backgroundColor: COLOR_WHITE,
    borderRadius: 10,
    overflow: 'hidden',
  },
  innerActive: {
    backgroundColor: COLOR_SECONDARY,
  },
  inner: {
    height: 110,
  },
  iconWrapper: {

  },
  text: {
    textAlign: 'center',
    color: COLOR_PRIMARY,
    fontSize: 12,
  },
  textActive: {
    color: COLOR_WHITE,
  }
});
