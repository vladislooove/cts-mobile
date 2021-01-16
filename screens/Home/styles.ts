// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_WHITE } from '../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginLeft: -10,
    marginRight: -10,
  },
  buttonWrapper: {
    width: '50%',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 30,
  },
  linkWrapper: {
    textAlign: 'right',
    color: COLOR_WHITE,
    paddingBottom: 10,
  },
});
