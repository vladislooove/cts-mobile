// Libs
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux'; 
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { AlphabetList } from "react-native-section-alphabet-list";

// Components
import SectionTitle from '../../../../components/SectionTitle';

// Selectors
import { factors$ } from '../../../../containers/System/selectors';

// Styles
import { COLOR_SECONDARY } from '../../../../styles/constants';
import styles from './styles';

// Types
import { FactorsListProps, FactorListItem } from './types';

export const FactorsList: FC<FactorsListProps> = ({ searchText, onSelectFactor, selectedFactors }) => {
  const factors = useSelector(factors$);
  const mappedFactors = useMemo(() => factors
    .filter(({ name }) => name.includes(searchText))
    .filter(({ id }) => !selectedFactors.find((item) => item.id === id))
    .map((item) => ({
      value: item.name,
      key: item.id,
      id: item.id,
    })
  ), [factors, searchText, selectedFactors]);

  return (
    <AlphabetList
      data={mappedFactors}
      indexLetterColor={COLOR_SECONDARY}
      renderCustomItem={(item: FactorListItem) => (
        <View style={styles.factor}>
          <TouchableNativeFeedback
            onPress={() => onSelectFactor(item)}
          >
            <Text style={styles.factorText}>{item.value}</Text>
          </TouchableNativeFeedback>
        </View>
      )}
      renderCustomSectionHeader={(section) => (
        <View style={styles.title}>
          <SectionTitle title={section.title} color={COLOR_SECONDARY} round />
        </View>
      )}
    />
  );
};

export default FactorsList;
