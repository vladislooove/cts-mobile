// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY } from '../../../../styles/constants';

export default StyleSheet.create({
  text: {
    color: COLOR_GRAY,
    paddingVertical: 20,
    marginBottom: 20
  },
  checkbox: {
    marginBottom: 5,
  },
  textarea: {
    paddingTop: 30,
  },
  footer: {
    flexDirection: 'row',
    marginTop: -20,
    justifyContent: 'center',
    paddingBottom: 20,
  },
});
