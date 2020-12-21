// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_WHITE, COLOR_SECONDARY } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    elevation: 2
  },
  wrapperPrimary: {
    backgroundColor: COLOR_SECONDARY,
  },
  innerContent: {
    padding: 16
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
