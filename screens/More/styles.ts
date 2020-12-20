// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  wrapper: { 
    padding: 20,
    flex: 1,
  },
  titleWrapper: {
    marginBottom: 25,
  },
  linksWrapper: {
    marginHorizontal: -20
  },
  link: {
    paddingHorizontal: 30,
  },
  linkInner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLOR_GRAY,
    borderBottomWidth: 1,
    paddingRight: 10,
  },
  arrow: {
    marginLeft: 'auto',
  },
  linkText: {
    color: COLOR_GRAY,
    fontSize: 16,
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
