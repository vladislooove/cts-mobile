// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    position: 'relative',
  },
  imageContainer: {
    height: 280,
    position: 'relative',
  },
  image: {
  },
  title: {
    marginBottom: 20,
  },
  content: {
    marginTop: -20,
    backgroundColor: COLOR_WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  text: {
    color: COLOR_GRAY,
    fontSize: 16,
    lineHeight: 22,
  }
});
