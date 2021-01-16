// Libs
import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import SectionTitle from '../../components/SectionTitle';
import Title from '../../components/Title';
import CareNotes from './components/CareNotes';
import Resources from '../../components/Resources';

// Selectors
import { diagnosis$ } from '../../containers/System/selectors';
import { COLOR_ERROR, COLOR_GREEN, COLOR_YELLOW } from '../../styles/constants';

// Styles
import styles from './styles';

export const Results: FC = () => {
  const diagnosis = useSelector(diagnosis$);

  if (!diagnosis) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.titleWrapper}>
          <Title>
            Results
          </Title>
        </View>
        {diagnosis.recommendations.length > 0 && (
          <View>
            <SectionTitle
              title={'Recommendations'}
              color={COLOR_ERROR}
            />
            <CareNotes items={diagnosis.recommendations} />
          </View>
        )}

        {diagnosis.considerations.length > 0 && (
          <View>
            <SectionTitle
              title={'Considerations'}
              color={COLOR_YELLOW}
            />
            <CareNotes items={diagnosis.considerations} />
          </View>
        )}

        {diagnosis.resources.length > 0 && (
          <View>
            <SectionTitle
              title={'Resources'}
              color={COLOR_GREEN}
            />
            <Resources resources={diagnosis.resources} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default Results;
