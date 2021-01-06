// Libs
import React, { FC, useState } from 'react';
import { View, TouchableNativeFeedback, Modal, Text } from 'react-native';
import { AlphabetList } from "react-native-section-alphabet-list";

// Components
import Input from '../Input';
import Title from '../Title';
import { ArrowRight } from '../icons';
import SectionTitle from '../SectionTitle';

// Styles
import styles from './styles';

// Types
import { SelectProps, Option } from './types';
import { COLOR_SECONDARY } from '../../styles/constants';

export const Select: FC<SelectProps> = ({
  onChange,
  options,
  value,
  placeholder,
  title,
  disabled,
  hideLetters,
}) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const onFocus = () => setIsListVisible(true);
  const onBlur = () => setIsListVisible(false);
  const onItemChange = (option: Option) => {
    onChange(option);
    onBlur();
  };

  const selectedItem = options.find((item) => item.value === value);
  const wrapperStyles = disabled ? { ...styles.wrapper, ...styles.wrapperDisabled } : styles.wrapper

  return (
    <View style={wrapperStyles}>
      <Input
        placeholder={placeholder}
        value={selectedItem?.label}
      />
      <TouchableNativeFeedback onPress={disabled ? undefined : onFocus}>
        <View style={styles.overlay}>
          <ArrowRight
            width="20"
            height="20"
            fill={COLOR_SECONDARY}
            style={styles.icon}
          />
        </View>
      </TouchableNativeFeedback>
      <Modal
        visible={isListVisible}
        animationType={'slide'}
        onRequestClose={onBlur}
      >
        <View>
          <View style={styles.titleWrapper}>
            <Title>
              {title}
            </Title>
          </View>
          <AlphabetList
            data={options}
            indexLetterColor={COLOR_SECONDARY}
            renderCustomItem={(item: Option) => (
              <View style={styles.item}>
                <TouchableNativeFeedback
                  onPress={() => onItemChange(item)}
                >
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableNativeFeedback>
              </View>
            )}
            renderCustomSectionHeader={(section) => hideLetters ? null : (
              <View style={styles.title}>
                <SectionTitle title={section.title} color={COLOR_SECONDARY} round />
              </View>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Select;
