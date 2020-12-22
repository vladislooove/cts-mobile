// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  image: {},
  title: {
    paddingVertical: 65,
    paddingHorizontal: 20,
    paddingBottom: 95,
    color: COLOR_WHITE,
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
    marginTop: -80,
  },
  categories: {
    flexDirection: 'row',
    padding: 20,
  },
  category: {
    margin: 5,
    width: 100,
    position: 'relative',
  }
});
