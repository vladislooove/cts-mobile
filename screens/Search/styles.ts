// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_ERROR, COLOR_SECONDARY, COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  selectedFactors: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  selectedFactorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedFactor: {
    backgroundColor: COLOR_SECONDARY,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginBottom: 10,
    position: 'relative',
    paddingRight: 30,
  },
  selectedFactorText: {
    color: COLOR_WHITE,
    fontSize: 12,
  },
  selectedFactorIcon: {
    position: 'absolute',
    top: '50%',
    right: 5,
    backgroundColor: COLOR_WHITE,
    marginTop: -5,
    borderRadius: 100,
    overflow: 'hidden',
  },
  selectedFactorIconText: {
    width: 20,
    height: 20,
    textAlign: 'center',
    lineHeight: 20,
    color: COLOR_ERROR,
    fontSize: 12,
  },
  titleWrapper: {
    padding: 20,
    marginBottom: 5,
  },
  inputWrapper: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  listWrapper: {
    flex: 1,
    paddingLeft: 20,
    position: 'relative',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
