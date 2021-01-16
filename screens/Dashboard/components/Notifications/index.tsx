// Libs
import React, { FC } from 'react';
import { View, Image, Text, FlatList, ListRenderItemInfo, Linking, TouchableNativeFeedback } from 'react-native';
import { useSelector } from 'react-redux';

// Selectors
import { notifications$ } from '../../selectors';

// Styles
import styles from './styles';

// Types
import { Notification } from '../../../../services/notifications/types';

export const Notifications: FC = () => {
  const notifications: Notification[] = useSelector(notifications$);

  const renderNotification = ({ item }: ListRenderItemInfo<Notification>) => {
    const notificationDate = new Date(item.createdAt);
    const onNotificationPress = item.noticeAttributes.length
      ? () => Linking.openURL(item.noticeAttributes[0]?.url)
      : undefined;``
    const formatDateUnit = (u: number) => u > 9 ? u : `0${u}`;

    return (
      <TouchableNativeFeedback onPress={onNotificationPress}>
        <View style={styles.notification} >
          <View style={styles.notificationHeader}>
            <Text style={styles.notificationTitle}>
              {item.noticeHeader}
            </Text>
            <Text style={styles.notificationDate}>
              {formatDateUnit(notificationDate.getDate())}
              {'.'}
              {formatDateUnit(notificationDate.getMonth() + 1)}
              {'.'}
              {notificationDate.getFullYear()}
            </Text>
          </View>
          <Text style={styles.notificationText}>
            {item.noticeDescription}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperBG} />
      <Image source={require('../../../../assets/NHSLogo.png')} style={styles.image} />
      <Text style={styles.imgText}>
        Clinical Commissioning Group
      </Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notifications}
      />
    </View>
  );
}

export default Notifications;
