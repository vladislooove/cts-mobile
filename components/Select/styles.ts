// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  wrapperDisabled: {
    opacity: 0.4,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 30,
    left: 0,
    zIndex: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  titleWrapper: {
    padding: 20,
  },
  item: {
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: COLOR_LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  itemText: {
    color: COLOR_GRAY,
  },
  title: {
    marginTop: -1,
    paddingHorizontal: 20,
    backgroundColor: COLOR_WHITE,
  }
});
