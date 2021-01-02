// Libs
import React, { FC, useEffect } from 'react';
import { View, ImageBackground, ScrollView, TouchableNativeFeedback, Text } from 'react-native';
import { useDispatch } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SearchInput from '../../components/SearchInput';

// Constants
import { RESOURCE_CATEGORIES, RESOURCES_REDUCER, RESOURCES_SAGA } from './constants';

// Hooks
import { useInjectReducer, useInjectSaga } from '../../hooks/reduxInjectors';

// Actions
import { getResources } from './actions';

// Saga
import saga from './sagas';

// Reducer
import reducer from './reducer';

// Styles
import styles from './styles';
import { COLOR_WHITE } from '../../styles/constants';

export const Resources: FC = () => {
  const dispatch = useDispatch();
  useInjectReducer({ key: RESOURCES_REDUCER, reducer });
  useInjectSaga({ key: RESOURCES_SAGA, saga });

  useEffect(() => {
    dispatch(getResources());
  }, [dispatch]);

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ImageBackground
        style={styles.poster}
        source={require('../../assets/resources-bg.jpg')}
        resizeMode="cover"
      >
        <Title style={styles.title}>
          Resources
        </Title>
      </ImageBackground>
      <ScrollView style={styles.scrollView}>
        <SearchInput />
        <View style={styles.iconsWrapper}>
          {RESOURCE_CATEGORIES.map((item) => (
            <View
              key={item.key}
              style={styles.iconColumn}
            >
              <View style={styles.icon}>
                <TouchableNativeFeedback>
                  <View style={styles.iconInnerWrapper}>
                    <View style={styles.iconInner}>
                      <item.icon width="40" height="40" fill={COLOR_WHITE} style={styles.svgIcon} />
                    </View>
                    <Text style={styles.iconText}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Resources;
