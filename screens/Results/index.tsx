// Libs
import React, { FC, useState } from 'react';
import { useNavigationState } from '@react-navigation/native';
import { ImageBackground, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Components
import Navigation from '../../components/Navigation';
import Tile from '../System/components/Tile';
import Button from '../../components/Button';

// Constants
import { SYSTEM_CATEGORIES } from '../System/constants';

// Styles
import styles from './styles';

export const Results: FC = () => {
  const routes = useNavigationState((state) => state.routes);
  const categories = (routes[routes.length - 1]?.params as any)?.categories ?? [];
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const title = selectedCategories.length > 1
    ? 'Combined'
    : SYSTEM_CATEGORIES.find(({ category }) => category === selectedCategories[0])?.name ?? '';
  
  const matchedCategories = selectedCategories.map((item: string) => {
    const relatedCategory = SYSTEM_CATEGORIES.find(({ category }) => category === item);

    return relatedCategory;
  });

  const onRemoveCategory = (item: string) => {
    if (selectedCategories.length > 1) {
      setSelectedCategories(
        (categories: string[]) => categories.filter((id) => item !== id),
      );
    }
  };

  console.log(matchedCategories);
  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ImageBackground source={require('../../assets/system-bg.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>
          {title}
        </Text>
      </ImageBackground>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.categories}>
          {matchedCategories.map((item) => (
            <View style={styles.category} key={item.category}>
              <Tile
                name={item.name}
                system={item.category}
                onSelect={() => onRemoveCategory(item.category)}
                active
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Results;
