// Libs
import React, { FC } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
// import Pdf from 'react-native-pdf';

// Components
import Navigation from '../../components/Navigation';

// Styles
import styles from './styles';

export const Resource: FC = () => {
  const routes = useNavigationState((state) => state.routes);
  const activeScreen = routes[routes.length - 1];
  const resource = activeScreen?.params ?? {};
  // const pdfLink = resource?.pdfLinks?.en;

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          {resource.title}
        </Text>
        <Text style={styles.description}>
          {resource.description}
        </Text>
        {/* <Pdf
          source={pdfLink}
          style={styles.pdf}
        /> */}
      </ScrollView>
    </View>
  );
};

export default Resource;
