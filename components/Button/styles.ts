// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_WHITE, COLOR_SECONDARY } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 7,
    elevation: 2,
    overflow: 'hidden',
  },
  wrapperPrimary: {
    backgroundColor: COLOR_SECONDARY,
  },
  innerContent: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: COLOR_SECONDARY,
    fontSize: 16,
  },
  textPrimary: {
    color: COLOR_WHITE,
  }
});
