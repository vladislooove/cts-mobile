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
    marginTop: -80,
    flexGrow: 0,
  },
  formScrollView: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
  },
  categories: {
    flexDirection: 'row',
    flexGrow: 0,
    padding: 20,
  },
  category: {
    margin: 5,
    width: 100,
    position: 'relative',
  }
});
