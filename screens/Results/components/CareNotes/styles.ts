// Libs
import { StyleSheet } from 'react-native';

// Styles
import { COLOR_GRAY, COLOR_LIGHT_GRAY, COLOR_SECONDARY } from '../../../../styles/constants';

export default StyleSheet.create({
  itemWrapper: {
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: COLOR_LIGHT_GRAY,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: COLOR_GRAY,
    borderRadius: 5,
    flexShrink: 0,
    padding: 10,
    marginRight: 10,
  },
  cancerName: {
    color: COLOR_SECONDARY,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5,
  },
  itemMarker: {
    width: 5,
    height: 5,
    borderRadius: 50,
    marginRight: 5,
    backgroundColor: COLOR_SECONDARY,
    position: 'absolute',
    top: 7,
    left: 0,
  },
  listItem: {
    position: 'relative',
    paddingLeft: 10,
  },
  shortName: {
    color: COLOR_GRAY,
    flexShrink: 1,
    maxWidth: '85%',
  },
  additionalNote: {
    color: COLOR_GRAY,
    fontSize: 13,
    paddingLeft: 10,
    maxWidth: '85%',
    flexShrink: 1,
  },
  textWrapper: {
    flexDirection: 'row',
  },
  itemDetails: {
    maxWidth: '100%',
  }
});
