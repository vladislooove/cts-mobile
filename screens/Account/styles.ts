// Libs
import { StyleSheet } from 'react-native';

// Styles
import {  COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  titleWrapper: {
    paddingVertical: 30,
  },
  sectionTitleWrapper: {
    marginBottom: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
});
