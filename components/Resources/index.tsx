// Libs
import React, { FC, useMemo } from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';

// Components
import { ArrowRight } from '../icons';

// Constants
import { RESOURCE_SCREEN } from '../../configs/routing/constants';

// Types
import { ResourceProps } from './types';
import { Resource } from '../../services/system/types';

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

// Services
import navigationService from '../../services/navigation';

export const Resources: FC<ResourceProps> = ({
  resources,
}) => {
  const onResourceClick = (item: Resource) => {
    navigationService.navigate(RESOURCE_SCREEN, item);
  };

  const sortedResource = useMemo(() => {
    return resources.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  }, [resources]);

  return sortedResource.map((item) => (
    <TouchableNativeFeedback key={item.id} onPress={() => onResourceClick(item)}>
      <View style={styles.resource}>
        <View style={styles.resourceContent}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>
        <ArrowRight fill={COLOR_SECONDARY} width="20" height="20" style={styles.icon} />
      </View>
    </TouchableNativeFeedback>
  ));
};

export default Resources;