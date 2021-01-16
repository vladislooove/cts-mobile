// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_SECONDARY, COLOR_WHITE } from '../../../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: -5,
  },
  buttonWrapper: {
    width: '50%',
    paddingHorizontal: 7, 
  },
  button: {
    backgroundColor: COLOR_WHITE,
    elevation: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonActive: {
    backgroundColor: COLOR_SECONDARY,
    elevation: 4,
  },
  inner: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: COLOR_SECONDARY,
  },
  textActive: {
    color: COLOR_WHITE,
  }
});
