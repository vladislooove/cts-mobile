// Libs
import React, { FC } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

// Components
import { Search } from '../icons';

// Styles
import { COLOR_WHITE } from '../../styles/constants';
import styles from './styles';

export const SearchInput: FC<TextInputProps> = ({
  style,
  ...props
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        {...props}
        placeholder="Search"
        style={styles.input}
        placeholderTextColor={COLOR_WHITE}
      />
      <Search
        style={styles.icon}
        width="20"
        height="20"
        fill="none"
        stroke={COLOR_WHITE}
        strokeWidth="3"
      />
    </View>
  );
}

export default SearchInput;
