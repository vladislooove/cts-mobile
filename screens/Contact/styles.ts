// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_SECONDARY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  map: {
    height: 270,
  },
  content: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -25,
    backgroundColor: COLOR_WHITE,
  },
  titleWrapper: {
    marginBottom: 20,
  },
  listItem: {
    borderTopWidth: 1,
    borderTopColor: COLOR_LIGHT_GRAY,
  },
  listItemInner: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  listIconWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listItemTitle: {
    color: COLOR_SECONDARY,
    fontWeight: '700',
    marginBottom: 5,
  },
  listItemText: {
    color: COLOR_GRAY,
  },
  footerText: {
    paddingVertical: 10,
    color: COLOR_GRAY,
  }
});
