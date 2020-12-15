// Libs
import React, { FC } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { useNavigationState } from '@react-navigation/native';

// Constants
import { DASHBOARD_SCREEN, SYSTEM_SCREEN, SEARCH_SCREEN, MORE_SCREEN } from '../../configs/routing/constants';

// Services
import navigationService from '../../services/navigation';

// Styles
import styles from './styles';

export const Navigation: FC = () => {
  const routes = useNavigationState((state) => state.routes);
  const activeScreen = routes[routes.length - 1]?.name;

  const onLinkClick = (route: string) => {
    navigationService.navigate(route);
  };

  const getLinkStyle = (isActive: boolean) => isActive ? {
    ...styles.menuLink,
    ...styles.menuActiveLink,
  } : styles.menuLink;

  return (
    <View style={styles.wrapper}>
      <View>
        {activeScreen !== DASHBOARD_SCREEN && (
          <Text>
            Back
          </Text>
        )}
      </View>
      <View style={styles.linksWrapper}>
        <TouchableNativeFeedback onPress={() => onLinkClick(DASHBOARD_SCREEN)}>
          <View style={getLinkStyle(activeScreen === DASHBOARD_SCREEN)}>
            <Text>
              Home
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => onLinkClick(SYSTEM_SCREEN)}>
          <View style={getLinkStyle(activeScreen === SYSTEM_SCREEN)}>
            <Text>
              system
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => onLinkClick(SEARCH_SCREEN)}>
          <View style={getLinkStyle(activeScreen === SEARCH_SCREEN)}>
            <Text>
              search
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => onLinkClick(MORE_SCREEN)}>
          <View style={getLinkStyle(activeScreen === MORE_SCREEN)}>
            <Text>
              more
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

export default Navigation;