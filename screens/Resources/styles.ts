// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_WHITE, COLOR_GREEN } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  poster: {},
  title: {
    color: COLOR_WHITE,
    paddingHorizontal: 20,
    paddingVertical: 75,
  },
  scrollView: {
    padding: 20,
  },
  iconsWrapper:{ 
    flexDirection: 'row',
    marginHorizontal: -5,
    flexWrap: 'wrap',
  },
  iconColumn: {
    width: '33.33333333%',
    padding: 5,
  },
  icon: {
    elevation: 4,
    backgroundColor: COLOR_GREEN,
    borderRadius: 8,
  },
  iconInnerWrapper: {
    flex: 1,
  },
  iconInner: {
    flex: 1,
  },
  iconText: {
    color: COLOR_WHITE,
    fontSize: 11,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  }
});
