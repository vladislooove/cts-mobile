// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  linksWrapper: {
    flexDirection: 'row',
  },
  menuLink: {
    borderRadius: 100,
    borderColor: COLOR_PRIMARY,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  menuActiveLink: {
    borderColor: COLOR_SECONDARY,
    backgroundColor: COLOR_SECONDARY,
  },
});
