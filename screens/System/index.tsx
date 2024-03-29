// Libs
import React, { FC, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import Tile from './components/Tile';
import Button from '../../components/Button';

// Containers
import SystemContainer from '../../containers/System';
import { Next } from '../../components/icons';

// Constants
import { SYSTEM_CATEGORIES } from './constants';
import { RISK_ASSESSMENT_SCREEN } from '../../configs/routing/constants';

// Services
import navigationService from '../../services/navigation';

// Styles
import styles from './styles';
import { COLOR_WHITE } from '../../styles/constants';

export const System: FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onCategoryPress = (id: string) => {
    const nextCategories = selectedCategories.includes(id)
      ? selectedCategories.filter((item) => item !== id)
      : [...selectedCategories, id];

    setSelectedCategories(nextCategories);
  };

  const onNextPress = () => {
    navigationService.navigate(RISK_ASSESSMENT_SCREEN, {
      categories: selectedCategories,
    });
  };

  return (
    <SystemContainer>
      <View style={styles.wrapper}>
        <Navigation />
        <ImageBackground source={require('../../assets/system-bg.jpg')} resizeMode="cover" style={styles.image}>
          <Title style={styles.title}>
            System
          </Title>
        </ImageBackground>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.categories}>
            {SYSTEM_CATEGORIES.map((item, index) =>  index + 1 !== SYSTEM_CATEGORIES.length && (
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
          </View>
        </ScrollView>
        {selectedCategories.length > 0 && (
          <View style={styles.footer}>
            <Button title="Next" primary onPress={onNextPress} iconRight>
              <Next
                width={17}
                height={17}
                fill={COLOR_WHITE}
                style={{
                  marginLeft: 15,
                  marginRight: 5,
                }}
              />
            </Button>
          </View>
        )}
      </View>
    </SystemContainer>
  );
}

export default System;
