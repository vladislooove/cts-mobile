// Libs
import React, { FC } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { useNavigationState } from '@react-navigation/native';

// Constants
import {
  DASHBOARD_SCREEN,
  SYSTEM_SCREEN,
  SEARCH_SCREEN,
  MORE_SCREEN,
  ABOUT_SCREEN,
  GOVERNANCE_SCREEN,
  CONTACT_SCREEN,
  RESOURCES_SCREEN,
  ACCOUNT_SCREEN,
  RISK_ASSESSMENT_SCREEN,
} from '../../configs/routing/constants';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../styles/constants';

// Components
import { Home, System, Search, More, Back } from '../icons';

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

  const getSvgIconProps = (isActive: boolean) => ({
    width: 15,
    height: 15,
    fill: 'none',
    stroke: isActive ? COLOR_SECONDARY : COLOR_PRIMARY,
    strokeWidth: 3,
  });

  return (
    <View style={styles.wrapper}>
      <View>
        {activeScreen !== DASHBOARD_SCREEN && (
          <Back
            width={25}
            height={25}
            fill={COLOR_PRIMARY}
            onPress={() => navigationService.goBack()}
          />
        )}
      </View>
      <View style={styles.linksWrapper}>
        <View style={getLinkStyle(activeScreen === DASHBOARD_SCREEN)}>
          <TouchableNativeFeedback
            onPress={() => onLinkClick(DASHBOARD_SCREEN)}
            background={TouchableNativeFeedback.Ripple('rgba(0, 159, 227, 0.5)', true)}
          >
            <View style={styles.menuLinkInner}>
              <Home {...getSvgIconProps(activeScreen === DASHBOARD_SCREEN)} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={getLinkStyle([SYSTEM_SCREEN, RISK_ASSESSMENT_SCREEN].includes(activeScreen))}>
          <TouchableNativeFeedback
            onPress={() => onLinkClick(SYSTEM_SCREEN)}
            background={TouchableNativeFeedback.Ripple('rgba(0, 159, 227, 0.5)', true)}
          >
            <View style={styles.menuLinkInner}>
              <System {...getSvgIconProps(activeScreen === SYSTEM_SCREEN)} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={getLinkStyle(activeScreen === SEARCH_SCREEN)}>
          <TouchableNativeFeedback
            onPress={() => onLinkClick(SEARCH_SCREEN)}
            background={TouchableNativeFeedback.Ripple('rgba(0, 159, 227, 0.5)', true)}
          >
            <View style={styles.menuLinkInner}>
              <Search {...getSvgIconProps(activeScreen === SEARCH_SCREEN)} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={getLinkStyle([
          MORE_SCREEN,
          ABOUT_SCREEN,
          GOVERNANCE_SCREEN,
          CONTACT_SCREEN,
          RESOURCES_SCREEN,
          ACCOUNT_SCREEN,
        ].includes(activeScreen))}>
          <TouchableNativeFeedback
            onPress={() => onLinkClick(MORE_SCREEN)}
            background={TouchableNativeFeedback.Ripple('rgba(0, 159, 227, 0.5)', true)}
          >
            <View style={styles.menuLinkInner}>
              <More {...getSvgIconProps([
                MORE_SCREEN,
                ABOUT_SCREEN,
                GOVERNANCE_SCREEN,
                CONTACT_SCREEN,
                RESOURCES_SCREEN,
                ACCOUNT_SCREEN,
              ].includes(activeScreen))} />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

export default Navigation;