// Libs
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { RecommendationConsideration } from '../../../../services/system/types';

// Utils
import { groupCareNotes, areMissingCareNotes } from '../../utils';

// Components
import { Chest, UpperGi, Breast, Gynae, Urology, Head, Neuro, Skin, Bones, Child, Haem, Specific } from '../../../System/components/icons';

// Styles
import styles from './styles';

// Types
import { CareNotestProps } from './types';

export const CareNotes: FC<CareNotestProps> = ({
  items,
}) => {
  if (!items) {
    return null;
  }

  const getIcon = (cancer: string) => {
    switch (cancer) {
      case 'CHEST':
        return Chest;
      case 'GASTROINTESTINAL':
        return UpperGi;
      case 'BREAST':
        return Breast;
      case 'GYNAECOLOGICAL':
        return Gynae;
      case 'UROLOGICAL':
        return Urology;
      case 'SKIN':
        return Skin;
      case 'HEAD_AND_NECK':
        return Head;
      case 'NEURO_AND_EYE':
        return Neuro;
      case 'HAEMATOLOGICAL':
        return Haem;
      case 'BONES_AND_SOFT_TISSUES':
        return Bones;
      case 'CHILDHOOD_ONLY':
        return Child;
      case 'NON_SPECIFIC':
      default:
        return Specific;
    }
  };

  const content = Array.isArray(items) ? groupCareNotes(items) : items;

  const renderSectionRow = (item: RecommendationConsideration, renderer: () => JSX.Element) => (
    <View style={styles.careNotestItem}>
      {renderer(item)}
    </View>
  );

  const renderNotMeetingCriteria = () => (
    <Text style={styles.notMeetingCriteria}>
      {content[0][0].additionalNote}
    </Text>
  );

  const renderItemDetails = ({ medicalPlan, additionalNote }: RecommendationConsideration) => (
    <View style={styles.itemDetails}>
      <View style={styles.listItem}>
        <View style={styles.itemMarker} />
        <View style={styles.textWrapper}>
          <Text style={styles.shortName}>{medicalPlan?.name ?? ''}</Text>
        </View>
      </View>
      {additionalNote && (
        <View style={styles.textWrapper}>
          <Text style={styles.additionalNote}>
            {additionalNote}
          </Text>
        </View>
      )}
    </View>
  );

  if (typeof content === 'string') {
    return (
      <View style={styles.innerTextListWrapper}>
        <p>{content}</p>
      </View>
    );
  }

  if (areMissingCareNotes(content)) {
    return renderSectionRow(content[0]?.[0], () => renderNotMeetingCriteria(content));
  }

  return content.map((items, index) => {
    const { cancer } = items[0];
    const Icon = getIcon(cancer.category);
    const additionalStyles = index === content.length - 1
      ? { borderBottomWidth: 0 }
      : {};
 
    return (
      <View key={cancer.id} style={{ ...styles.itemWrapper, ...additionalStyles }}>
        <View style={styles.iconWrapper}>
          <Icon width="35" height="35" />
        </View>
        <View>
          <Text style={styles.cancerName}>{cancer.name}</Text>
          <View style={styles.sectionList}>
            {items.map((item) => (
              <View key={item.id}>{renderSectionRow(item, renderItemDetails)}</View>
            ))}
          </View>
        </View>
      </View>
    );
  });
};

export default CareNotes;
