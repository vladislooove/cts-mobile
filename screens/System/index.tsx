// Libs
import React, { FC, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Tile from './components/Tile';

// Constants
import { SYSTEM_CATEGORIES } from './constants';

// Styles
import styles from './styles';

export const System: FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onCategoryPress = (id: string) => {
    const nextCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((item) => item !== id)
      : [...selectedCategories, id];

    setSelectedCategories(nextCategories);
  };

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ImageBackground source={require('../../assets/system-bg.jpg')} resizeMode="cover" style={styles.image}>
        <Title style={styles.title}>
          System
        </Title>
      </ImageBackground>
      <ScrollView style={styles.categories}>
        {SYSTEM_CATEGORIES.map((item) => (
          <View style={styles.category} key={item.category}>
            <Tile
              name={item.name}
              system={item.category}
              active={selectedCategories.includes(item.category)}
              onSelect={() => onCategoryPress(item.category)}
              key={item.category}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default System;
