// Libs
import React, { FC } from 'react';

// Components
import { View, TouchableNativeFeedback, Text } from 'react-native';
import { Chest, UpperGi, Breast, Gynae, Urology, Head, Neuro, Skin, Bones, Child, Haem, Specific } from '../icons';

// Types
import { TileProps } from './types';

// Styles
import styles from './styles';

export const Tile: FC<TileProps> = ({
  name,
  system,
  active,
  onSelect,
}) => {
  let Icon = Chest;

  if (system == 'CHEST') {
    Icon = Chest;
  } else if (system === 'GASTROINTESTINAL') {
    Icon = UpperGi;
  } else if (system === 'BREAST') {
    Icon = Breast;
  } else if (system === 'GYNAECOLOGICAL') {
    Icon = Gynae;
  } else if (system === 'UROLOGICAL') {
    Icon = Urology;
  } else if (system === 'SKIN') {
    Icon = Skin;
  } else if (system === 'HEAD_AND_NECK') {
    Icon = Head;
  } else if (system === 'NEURO_AND_EYE') {
    Icon = Neuro;
  } else if (system === 'HAEMATOLOGICAL') {
    Icon = Haem;
  } else if (system === 'BONES_AND_SOFT_TISSUES') {
    Icon = Bones;
  } else if (system === 'CHILDHOOD_ONLY') {
    Icon = Child;
  } else if (system === 'NON_SPECIFIC') {
    Icon = Specific;
  }

  const iconProps = {
    width: 50,
    height: 50,
    active,
    style: styles.icon,
  };

  return (
    <View style={styles.wrapper}>
      <TouchableNativeFeedback onPress={onSelect}>
        <View style={active ? { ...styles.inner, ...styles.innerActive } : styles.inner}>
          <View style={styles.iconWrapper}>
            <Icon {...iconProps} />
          </View>
          <Text style={active ? { ...styles.text, ...styles.textActive } : styles.text}>
            {name}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
};

export default Tile;