// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  titleWrapper: {
    paddingVertical: 40,
  },
  sectionTitleWrapper: {
    marginBottom: 20,
  },
  note: {
    fontSize: 15,
    color: COLOR_GRAY,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: -5,
    marginBottom: 20,
  },
  buttonCol: {
    width: '50%',
    paddingHorizontal: 5,
  },
  footer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
