// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_WHITE } from '../../../../styles/constants';

export default StyleSheet.create({
  title: {
    paddingRight: 20,
    backgroundColor: COLOR_WHITE,
  },
  factorText: {
    color: COLOR_GRAY,
    paddingVertical: 15,
  },
  factor: {
    borderBottomColor: COLOR_LIGHT_GRAY,
    borderBottomWidth: 1,
    marginRight: 20,
    marginBottom: -1
  }
});
