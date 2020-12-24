// Libs
import React, { FC } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

// Components
import { Checkmark } from '../icons';

// Styles
import styles from './styles';

// Types
import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = ({
  label,
  value,
  onChange,
}) => {
  const handleChange = () => {
    onChange(!value);
  };

  return (
    <TouchableWithoutFeedback onPress={handleChange}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>
          {label}
        </Text>
        <View style={value ? { ...styles.iconWrapper, ...styles.iconWrapperActive } : styles.iconWrapper}>
          {value && (
            <Checkmark width="20" height="20" style={styles.icon} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Checkbox;
