// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_SECONDARY, COLOR_GRAY } from '../../../../styles/constants';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    paddingLeft: 20,
    borderRadius: 5,
    shadowColor: "#000",
    elevation: 3,
    overflow: 'hidden',
  },
  wrapperBG: {
    position: 'absolute',
    top: 5,
    right: 3,
    bottom: 1,
    left: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  image: {
    marginBottom: 15,
    width: 60,
    height: 25
  },
  imgText: {
    color: COLOR_SECONDARY,
    paddingBottom: 10,
    borderBottomColor: COLOR_GRAY,
    borderBottomWidth: 1,
  },
  notifications: {
    height: 300
  },
  notification: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: COLOR_GRAY,
    borderBottomWidth: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  notificationTitle: {
    color: COLOR_SECONDARY,
    fontWeight: '700',
    fontSize: 18,
    paddingRight: 10,
    flexShrink: 1,
  },
  notificationDate: {
    color: COLOR_SECONDARY,
  },
  notificationText: {
    color: COLOR_GRAY,
    fontSize: 16,
  }
});
