// Libs
import React, { FC, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SearchInput from '../../components/SearchInput';
import Resources from '../../components/Resources';

// Selectors
import { userCcg$ } from '../../containers/App/selectors';
import { resources$ } from '../Resources/selectors';

// Styles
import styles from './styles';

export const ResourcesCategory: FC = () => {
  const routes = useNavigationState((state) => state.routes);
  const resources = useSelector(resources$);
  const userCCG = useSelector(userCcg$);
  const activeScreen = routes[routes.length - 1];
  const { name, categories } = activeScreen?.params ?? {};

  const resourcesByCategory = useMemo(() => {
    return resources.filter((item) => {
      if (name === 'CCG' && userCCG) {
        return item.ccgs.includes(userCCG.id);
      }

      return item.categories.some(
        (category) => categories?.includes(category),
      ) && (item.ccgs.includes(userCCG?.id ?? '') || item.ccgs.includes('ALL'));
    });
  }, [resources, categories, name]);

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleWrapper}>
          <Title>
            {name}
          </Title>
        </View>
        <SearchInput />
        <Resources resources={resourcesByCategory} />
      </ScrollView>
    </View>
  );
};

export default ResourcesCategory;
