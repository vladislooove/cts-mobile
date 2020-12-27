// Libs
import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SearchInput from '../../components/SearchInput';
import FactorsList from './components/FactorsList';

// Containers
import SystemContainer from '../../containers/System';

// Styles
import styles from './styles';

// Types
import { FactorListItem } from './components/FactorsList/types';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export const Search: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedFactors, setSelectedFactors] = useState<FactorListItem[]>([]);

  const onInputChange = (value: string) => setSearchText(value);

  const onSelectFactor = (item: FactorListItem) => {
    setSelectedFactors((factors) => [...factors, item]);
  };

  const onRemoveFactor = (item: FactorListItem) => {
    setSelectedFactors((factors) => factors.filter(({ id }) => id !== item.id));
  };

  return (
    <SystemContainer>
      <View style={styles.wrapper}>
        <Navigation />
        {selectedFactors.length > 0 && (
          <View style={styles.selectedFactors}>
            {selectedFactors.map((item) => (
              <View style={styles.selectedFactorWrapper} key={item.id}>
                <View style={styles.selectedFactor}>
                  <Text style={styles.selectedFactorText}>
                    {item.value}
                  </Text>
                  <View style={styles.selectedFactorIcon}>
                    <TouchableNativeFeedback onPress={() => onRemoveFactor(item)}>
                      <Text style={styles.selectedFactorIconText}>X</Text>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
        <View style={styles.titleWrapper}>
          <Title>
            Search
          </Title>
        </View>
        <View style={styles.inputWrapper}>
          <SearchInput
            onChangeText={onInputChange}
            value={searchText}
          />
        </View>
        <View style={styles.listWrapper}>
          <FactorsList
            searchText={searchText}
            selectedFactors={selectedFactors}
            onSelectFactor={onSelectFactor}
          />
        </View>
      </View>
    </SystemContainer>
  );
}

export default Search;
