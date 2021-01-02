// Libs
import React, { FC, useMemo } from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';

// Components
import { ArrowRight } from '../icons';

// Types
import { ResourceProps } from './types';

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

export const Resources: FC<ResourceProps> = ({
  resources,
}) => {
  const sortedResource = useMemo(() => {
    return resources.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  }, [resources]);

  return sortedResource.map(({ id, title, description }) => (
    <TouchableNativeFeedback key={id}>
      <View style={styles.resource}>
        <View style={styles.resourceContent}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
        <ArrowRight fill={COLOR_SECONDARY} width="20" height="20" style={styles.icon} />
      </View>
    </TouchableNativeFeedback>
  ));
};

export default Resources;