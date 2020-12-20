// Libs
import React, { FC } from 'react';
import { View, TouchableNativeFeedback, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import { About, ArrowRight, Governance, Contact, Resources, User } from '../../components/icons';

// Utils
import { useInjectSaga } from '../../hooks/reduxInjectors'

// Constants
import {
  ABOUT_SCREEN,
  GOVERNANCE_SCREEN,
  CONTACT_SCREEN,
  RESOURCES_SCREEN,
  ACCOUNT_SCREEN,
} from '../../configs/routing/constants';
import { MORE_SAGA } from './constants';

// Styles
import styles from './styles';
import { COLOR_PRIMARY } from '../../styles/constants';

// Services
import navigationService from '../../services/navigation';

// Sagas
import saga from './sagas';

// Actions
import { logout } from './actions';

export const More: FC = () => {
  const dispatch = useDispatch();
  useInjectSaga({ key: MORE_SAGA, saga });

  const handleLogout = () => dispatch(logout());

  const svgIconProps = {
    width: 75,
    height: 75,
  };

  return (
    <View style={styles.container}>
      <Navigation />
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Title>
            More
          </Title>
        </View>
        <View style={styles.linksWrapper}>
          <TouchableNativeFeedback onPress={() => navigationService.navigate(ABOUT_SCREEN)}>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <About {...svgIconProps} />
                <Text style={styles.linkText}>
                  About
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigationService.navigate(GOVERNANCE_SCREEN)}>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <Governance {...svgIconProps} />
                <Text style={styles.linkText}>
                  Governance
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigationService.navigate(CONTACT_SCREEN)}>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <Contact {...svgIconProps} />
                <Text style={styles.linkText}>
                  Contact
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigationService.navigate(RESOURCES_SCREEN)}>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <Resources {...svgIconProps} />
                <Text style={styles.linkText}>
                  Resources
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigationService.navigate(ACCOUNT_SCREEN)}>
            <View style={styles.link}>
              <View style={styles.linkInner}>
                <User {...svgIconProps} />
                <Text style={styles.linkText}>
                  My Account
                </Text>
                <ArrowRight width={25} height={25} fill={COLOR_PRIMARY} style={styles.arrow} />
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.footer}>
          <Button
            title={'Logout'}
            onPress={handleLogout}
          />
        </View>
      </View>
    </View>
  );
}

export default More;
