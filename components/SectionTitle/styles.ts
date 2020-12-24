// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: COLOR_WHITE,
    borderRadius: 30,
    fontSize: 12,
    position: 'relative',
    zIndex: 1,
  },
  line: {
    height: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
  },
});
