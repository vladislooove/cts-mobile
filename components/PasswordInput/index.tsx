// Libs
import React, { FC, useState } from 'react';

// Components
import { View, TouchableNativeFeedback } from 'react-native';
import Input from '../Input';
import { Eye, EyeThrough } from '../icons';

// Types
import { InputProps } from '../Input/types';

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

export const PasswordInput: FC<InputProps> = (props) => {
  const [hidePassword, setHidePassword] = useState(true);
  const iconProps = {
    width: 30,
    height: 30,
    fill: COLOR_SECONDARY,
  };

  const onIconToggle = () => setHidePassword((prevValue) => !prevValue);

  return (
    <View style={styles.wrapper}>
      <Input
        {...props}
        secureTextEntry={hidePassword}
      />
      <View style={styles.iconWrapper}>
        <TouchableNativeFeedback
          onPress={onIconToggle}
          background={TouchableNativeFeedback.Ripple('rgba(0, 159, 227, 0.5)', true)}
        >
          {hidePassword ? <Eye {...iconProps} /> : <EyeThrough {...iconProps} />}
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

export default PasswordInput;
