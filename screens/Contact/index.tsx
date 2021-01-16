// Libs
import React, { FC, useState } from 'react';
import { View, ScrollView, TouchableNativeFeedback, Text, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import { Notebook, Phone, Email } from '../../components/icons';
import FeedbackSection from './components/FeedbackSection';

// Hooks
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Saga
import saga from './sagas';

// Constants
import { CONTACT_SAGA } from './constants';

// Styles
import styles from './styles';
import { COLOR_PRIMARY } from '../../styles/constants';

export const Contact: FC = () => {
  useInjectSaga({ key: CONTACT_SAGA, saga });

  const [isFeedbackSectionVisible, setIsFeedbackSectionVisible] = useState(false);
  const onPhoneClick = () => Linking.openURL('tel:+442071579656');
  const onEmailClick = () => Linking.openURL('mailto:info@cthesigns.co.uk');
  const onFeedbackClick = () => setIsFeedbackSectionVisible((prevState) => !prevState);

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 51.4803976,
            longitude: -0.1101243,
            latitudeDelta: 0.005922,
            longitudeDelta: 0.005421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 51.4803976,
              longitude: -0.1101243,
            }}
            title="C The Signs"
          />
        </MapView>
        <View style={styles.content}>
          <View style={styles.titleWrapper}>
            <Title>
              Contact
            </Title>
          </View>
          <View style={styles.listItem}>
            <TouchableNativeFeedback onPress={onFeedbackClick}>
              <View style={styles.listItemInner}>
                <View style={styles.listIconWrapper}>
                  <Notebook
                    width="30"
                    height="30"
                    stroke={COLOR_PRIMARY}
                  />
                </View>
                <View>
                  <Text style={styles.listItemTitle}>
                    Get in touch
                  </Text>
                  <Text style={styles.listItemText}>
                    Support, comments, feedback
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          {isFeedbackSectionVisible && <FeedbackSection />}
          <View style={styles.listItem}>
            <TouchableNativeFeedback onPress={onPhoneClick}>
              <View style={styles.listItemInner}>
                <View style={styles.listIconWrapper}>
                  <Phone
                    width="30"
                    height="23"
                    fill={COLOR_PRIMARY}
                  />
                </View>
                <View>
                  <Text style={styles.listItemTitle}>
                    Telephone
                  </Text>
                  <Text style={styles.listItemText}>
                    +44 207 157 9656
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.listItem}>
            <TouchableNativeFeedback onPress={onEmailClick}>
              <View style={styles.listItemInner}>
                <View style={styles.listIconWrapper}>
                  <Email
                    width="30"
                    height="30"
                    stroke={COLOR_PRIMARY}
                  />
                </View>
                <View>
                  <Text style={styles.listItemTitle}>
                    Email
                  </Text>
                  <Text style={styles.listItemText}>
                    info@cthesigns.co.uk
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          <Text style={styles.footerText}>
            Office hours are between 09:00am - 18:00pm Monday to Friday,. If you contact us outside of these times we get back to you by 10:00am the next business day.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Contact;
