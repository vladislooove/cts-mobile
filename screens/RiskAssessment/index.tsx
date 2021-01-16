// Libs
import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigationState } from '@react-navigation/native';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import { useForm, Controller, ControllerRenderProps } from 'react-hook-form';

// Components
import Navigation from '../../components/Navigation';
import Tile from '../System/components/Tile';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import GenderField from './components/GenderField';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

// Utils
import { mergeFactorsBySystems } from '../../containers/System/utils';

// Constants
import { SYSTEM_CATEGORIES } from '../System/constants';
import { TYPE_NAMES } from './constants';

// Actions
import { submitFactors }  from '../../containers/System/actions';

// Selectors
import { factorsByCategories$ } from '../../containers/System/selectors'; 

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

// Types
import { Factor } from '../../services/system/types';

export const RiskAssessment: FC = () => {
  const allFactors = useSelector(factorsByCategories$);
  const dispatch = useDispatch();
  const routes = useNavigationState((state) => state.routes);
  const categories = (routes[routes.length - 1]?.params as any)?.categories ?? [];
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const factors = mergeFactorsBySystems(allFactors, selectedCategories);
  const { control, handleSubmit } = useForm();
  
  const matchedCategories = selectedCategories.map((item: string) => {
    const relatedCategory = SYSTEM_CATEGORIES.find(({ category }) => category === item);

    return relatedCategory;
  });

  const title = selectedCategories.length > 1
    ? 'Combined'
    : SYSTEM_CATEGORIES.find(({ category }) => category === selectedCategories[0])?.name ?? '';

  const onRemoveCategory = (item: string) => {
    if (selectedCategories.length > 1) {
      setSelectedCategories(
        (categories: string[]) => categories.filter((id) => item !== id),
      );
    }
  };

  const onSubmit = (data: { [key: string]: string | boolean }) => {
    dispatch(submitFactors({
      factors: data,
      categories: selectedCategories,
    }));
  };

  const renderControl = ({ onChange, name, value }: ControllerRenderProps, label: string) => {
    if (name === 'age') {
      return (
        <View style={styles.ageField}>
          <Text style={{ ...styles.label, paddingBottom: 30, paddingTop: 10 }}>
            {label}
          </Text>
          <Input
            onChangeText={onChange}
            keyboardType="numeric"
            value={value}
            style={styles.ageInput}
          />
        </View>
      );
    }

    if (name === 'gender') {
      return (
        <GenderField
          onChange={onChange}
          value={value}
        />
      );
    }

    return (
      <Checkbox
        label={label}
        onChange={onChange}
        value={value}
      />
    );
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
          <View key={type}>
            <SectionTitle
              title={(TYPE_NAMES  as any)[type]}
              color={COLOR_SECONDARY}
            />
            {factors.map((item: Factor, index: number) => (
              <View
                key={item.id}
                style={index === factors.length - 1
                  ? { ...styles.factor, borderBottomColor: 'transparent' }
                  : styles.factor
                }
              >
                <Controller
                  name={item.id}
                  control={control}
                  defaultValue={
                    ['age', 'gender'].includes(item.id)
                      ? ''
                      : false
                  }
                  rules={{ required: item.id === 'age' }}
                  render={(props) => renderControl(props, item.name)}
                />
              </View>
            ))}
          </View>
        ))}
        <View style={styles.footer}>
          <Button
            title="Risk assess"
            primary
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RiskAssessment;
