// Libs
import React, { FC, useEffect, useState, useMemo } from 'react';
import { View, ImageBackground, ScrollView, TouchableNativeFeedback, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SearchInput from '../../components/SearchInput';
import ResourcesList from '../../components/Resources';

// Constants
import { RESOURCES_CATEGORY_SCREEN } from '../../configs/routing/constants';
import { RESOURCE_CATEGORIES, RESOURCES_REDUCER, RESOURCES_SAGA } from './constants';

// Hooks
import { useInjectReducer, useInjectSaga } from '../../hooks/reduxInjectors';

// Actions
import { getResources } from './actions';

// Saga
import saga from './sagas';

// Reducer
import reducer from './reducer';

// Services
import navigationService from '../../services/navigation';

// Selectors
import { resources$ } from './selectors';

// Styles
import styles from './styles';
import { COLOR_WHITE } from '../../styles/constants';

export const Resources: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const resources = useSelector(resources$);
  const dispatch = useDispatch();
  useInjectReducer({ key: RESOURCES_REDUCER, reducer });
  useInjectSaga({ key: RESOURCES_SAGA, saga });

  useEffect(() => {
    dispatch(getResources());
  }, [dispatch]);

  const onCategoryClick = (item: { name: string; categories: string[] }) => {
    navigationService.navigate(RESOURCES_CATEGORY_SCREEN, {
      name: item.name,
      categories: item.categories,
    });
  };

  const onInputChange = (text: string) => setSearchQuery(text);

  const resourcesByQuery = useMemo(() => {
    return resources.filter(({ title, description }) => {
      return title.toLowerCase().includes(searchQuery.toLowerCase())
        || description.toLowerCase().includes(searchQuery.toLowerCase());
    })
  }, [resources, searchQuery]);

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView>
        <ImageBackground
          style={styles.poster}
          source={require('../../assets/resources-bg.jpg')}
          resizeMode="cover"
        >
          <Title style={styles.title}>
            Resources
          </Title>
        </ImageBackground>
        <View style={styles.content}>
          <SearchInput value={searchQuery} onChangeText={onInputChange} />
          {!searchQuery ? (
            <View style={styles.iconsWrapper}>
              {RESOURCE_CATEGORIES.map((item) => (
                <View
                  key={item.key}
                  style={styles.iconColumn}
                >
                  <View style={styles.icon}>
                    <TouchableNativeFeedback onPress={() => onCategoryClick(item)}>
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
          ) : <ResourcesList resources={resourcesByQuery} />}
        </View>
      </ScrollView>
    </View>
  );
}

export default Resources;
