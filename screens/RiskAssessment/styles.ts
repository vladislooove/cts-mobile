// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  image: {},
  title: {
    paddingVertical: 65,
    paddingHorizontal: 20,
    paddingBottom: 95,
    color: COLOR_WHITE,
    fontSize: 20,
  },
  scrollView: {
    marginTop: -80,
    flexGrow: 0,
  },
  formScrollView: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    paddingHorizontal: 20,
  },
  categories: {
    flexDirection: 'row',
    flexGrow: 0,
    padding: 20,
    paddingBottom: 0,
  },
  category: {
    margin: 5,
    width: 100,
    position: 'relative',
  },
  ageField: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: -30,
  },
  ageInput: {
    height: 40,
    width: 70,
  },
  factor: {
    marginLeft: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_LIGHT_GRAY,
  },
  label: {
    color: COLOR_GRAY,
  }
});
