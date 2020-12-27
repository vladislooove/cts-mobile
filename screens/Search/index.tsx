// Libs
import React, { FC } from 'react';
import { View } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SearchInput from '../../components/SearchInput';
import FactorsList from './components/FactorsList';

// Containers
import SystemContainer from '../../containers/System';

// Styles
import styles from './styles';

export const Search: FC = () => {
  return (
    <SystemContainer>
      <View style={styles.wrapper}>
        <Navigation />
        <View style={styles.titleWrapper}>
          <Title>
            Search
          </Title>
        </View>
        <View style={styles.inputWrapper}>
          <SearchInput />
        </View>
        <View style={styles.listWrapper}>
          <FactorsList />
        </View>
      </View>
    </SystemContainer>
  );
}

export default Search;
