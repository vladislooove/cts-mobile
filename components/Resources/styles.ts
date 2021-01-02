// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_SECONDARY } from '../../styles/constants';

export default StyleSheet.create({
  resource: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    borderBottomColor: COLOR_LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  resourceContent: {
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 5,
  },
  icon: {
    flexShrink: 0,
  },
  title: {
    color: COLOR_SECONDARY,
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    color: COLOR_GRAY,
  }
});
