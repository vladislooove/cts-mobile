// Libs
import React, { FC, useMemo, useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const activeScreen = routes[routes.length - 1];
  const { name, categories } = activeScreen?.params ?? {};

  const onInputChange = (text: string) => setSearchQuery(text);

  const resourcesByCategory = useMemo(() => {
    const filteredResources = resources.filter((item) => {
      if (name === 'CCG' && userCCG) {
        return item.ccgs.includes(userCCG.id);
      }

      return item.categories.some(
        (category) => categories?.includes(category),
      ) && (item.ccgs.includes(userCCG?.id ?? '') || item.ccgs.includes('ALL'));
    });

    return filteredResources.filter(({ title, description }) => {
      return title.toLowerCase().includes(searchQuery.toLowerCase())
        || description.toLowerCase().includes(searchQuery.toLowerCase());
    })
  }, [resources, categories, name, searchQuery]);

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleWrapper}>
          <Title>
            {name}
          </Title>
        </View>
        <SearchInput value={searchQuery} onChangeText={onInputChange} />
        <Resources resources={resourcesByCategory} />
      </ScrollView>
    </View>
  );
};

export default ResourcesCategory;
