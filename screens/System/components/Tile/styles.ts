// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    elevation: 4,
    backgroundColor: COLOR_WHITE,
    borderRadius: 10,
    overflow: 'hidden',
  },
  innerActive: {
    backgroundColor: COLOR_SECONDARY,
  },
  inner: {
    height: 110,
    flex: 1,
    justifyContent: 'space-between',
  },
  iconWrapper: {
    position: 'relative',
    flexGrow: 1,
  },
  icon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: -25,
    marginLeft: -25,
  },
  text: {
    textAlign: 'center',
    color: COLOR_PRIMARY,
    fontSize: 12,
    paddingVertical: 7,
    paddingHorizontal: 2,
  },
  textActive: {
    color: COLOR_WHITE,
  }
});
