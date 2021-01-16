// Libs
import React, { FC } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

// Components
import { Male, Female } from '../../../../components/icons';

// Styles
import styles from './styles';
import { COLOR_SECONDARY, COLOR_WHITE } from '../../../../styles/constants';

// Types
import { GenderFieldProps } from './types';

export const GenderField: FC<GenderFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  const handleChange = (value: boolean) => {
    onChange(value);
  };

  const getSvgProps = (isActive: boolean) => ({
    width: 15,
    height: 15,
    fill: isActive ? COLOR_WHITE : COLOR_SECONDARY,
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <View style={value === false ? { ...styles.button, ...styles.buttonActive } : styles.button}>
          <TouchableNativeFeedback onPress={() => handleChange(false)}>
            <View style={styles.inner}>
              <Male {...getSvgProps(value === false)} />
              <Text
                style={value === false ? { ...styles.text, ...styles.textActive } : styles.text}
              >Male</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
      <View style={value === true ? { ...styles.button, ...styles.buttonActive } : styles.button}>
          <TouchableNativeFeedback onPress={() => handleChange(true)}>
            <View style={styles.inner}>
              <Female {...getSvgProps(value === true)} />
              <Text
                style={value === true ? { ...styles.text, ...styles.textActive } : styles.text}
              >Female</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
}

export default GenderField;
