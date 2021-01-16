// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE
  },
  linksWrapper: {
    flexDirection: 'row',
  },
  menuLink: {
    borderRadius: 100,
    borderColor: COLOR_PRIMARY,
    borderWidth: 1,
    marginHorizontal: 3,
    overflow: 'hidden',
  },
  menuActiveLink: {
    borderColor: COLOR_SECONDARY,
    backgroundColor: 'rgb(217, 240, 248)'
  },
  menuLinkInner: {
    padding: 10,
  },
});
