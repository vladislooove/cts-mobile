// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_PINK } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  label: {
    color: COLOR_GRAY,
    flexShrink: 1,
    paddingRight: 5,
  },
  iconWrapper: {
    position: 'relative',
    width: 40,
    height: 40,
    backgroundColor: COLOR_LIGHT_GRAY,
    flexBasis: 40,
    flexShrink: 0,
    borderRadius: 100,
  },
  iconWrapperActive: {
    backgroundColor: COLOR_PINK,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -10,
    marginLeft: -10,
  }
});
