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
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingBottom: 120,
    color: COLOR_WHITE,
  },
  scrollView: {
    flex: 1,
    marginTop: -160,
    padding: 20,
  },
  categories: {
    marginHorizontal: -5,
    paddingTop: 80,
    paddingBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {
    padding: 5,
    width: '33.3333333%',
  }
});
