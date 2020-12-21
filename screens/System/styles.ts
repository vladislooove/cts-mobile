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
  categories: {
    marginTop: -160,
    padding: 20,
    marginHorizontal: -10,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  category: {
    // padding: 10,
    // flexGrow: 1,
    // width: '33.333333%',
    backgroundColor: 'green',
    margin: 10,
  }
});
