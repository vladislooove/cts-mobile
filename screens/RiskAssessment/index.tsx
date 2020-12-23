// Libs
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigationState } from '@react-navigation/native';
import { ImageBackground, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Components
import Navigation from '../../components/Navigation';
import Tile from '../System/components/Tile';
import Button from '../../components/Button';

// Utils
import { mergeFactorsBySystems } from '../../containers/System/utils';

// Constants
import { SYSTEM_CATEGORIES } from '../System/constants';
import { TYPE_NAMES } from './constants';

// Selectors
import { factorsByCategories$ } from '../../containers/System/selectors'; 

// Styles
import styles from './styles';

export const RiskAssessment: FC = () => {
  const allFactors = useSelector(factorsByCategories$);
  const routes = useNavigationState((state) => state.routes);
  const categories = (routes[routes.length - 1]?.params as any)?.categories ?? [];
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const factors = mergeFactorsBySystems(allFactors, selectedCategories);
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
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.formScrollView}>
        {Object.entries(factors).map(([type, factors]) => (
          <View>
            <Text>
              {(TYPE_NAMES  as any)[type]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RiskAssessment;
