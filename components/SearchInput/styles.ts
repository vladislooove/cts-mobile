// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_LIGHT_GRAY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: COLOR_LIGHT_GRAY,
    paddingHorizontal: 15,
    paddingVertical: 5,
    paddingRight: 40,
    borderRadius: 20,
    color: COLOR_WHITE,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    marginTop: -10,
  }
});
