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
  content: {
    padding: 20,
  },
  iconsWrapper:{ 
    flexDirection: 'row',
    paddingTop: 10,
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
    height: 100,
    paddingVertical: 10,
  },
  iconInner: {
    position: 'relative',
    flexGrow: 1,
  },
  svgIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: -20,
    marginLeft: -20,  
  },
  iconText: {
    color: COLOR_WHITE,
    fontSize: 11,
    textAlign: 'center',
    paddingHorizontal: 5,
  }
});
