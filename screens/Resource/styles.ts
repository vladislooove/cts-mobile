// Libs
import { StyleSheet, Dimensions } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_SECONDARY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  scrollView: {
    padding: 20,
  },
  title: {
    color: COLOR_SECONDARY,
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    color: COLOR_GRAY,
    marginBottom: 10,
  },
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
