// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_WHITE, COLOR_ERROR } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    paddingBottom: 30,
    position: 'relative',
  },
  input: {
    backgroundColor: COLOR_WHITE,
    padding: 10,
    borderRadius: 5,
    borderColor: COLOR_LIGHT_GRAY,
    borderWidth: 1.5,
    textAlignVertical: 'top',
  },
  inputFocused: {
    borderColor: COLOR_GRAY,
  },
  errorText: {
    color: COLOR_ERROR,
    fontSize: 12,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 13,
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: '50%',
    marginTop: -15,
    backgroundColor: COLOR_WHITE,
    zIndex: 10,
  }
});
