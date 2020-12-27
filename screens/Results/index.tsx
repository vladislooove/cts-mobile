// Libs
import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import SectionTitle from '../../components/SectionTitle';
import Title from '../../components/Title';
import CareNote from './components/CareNote';

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
      <View style={styles.titleWrapper}>
        <Title>
          Results
        </Title>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {diagnosis.recommendations.length > 0 && (
          <View>
            <SectionTitle
              title={'Recommendations'}
              color={COLOR_ERROR}
            />
            {diagnosis.recommendations.map((item) => (
              <CareNote key={item.id} />
            ))}
          </View>
        )}

        {diagnosis.considerations.length > 1 && (
          <View>
            <SectionTitle
              title={'Considerations'}
              color={COLOR_YELLOW}
            />
          </View>
        )}

        {diagnosis.resources.length > 1 && (
          <View>
            <SectionTitle
              title={'Resources'}
              color={COLOR_GREEN}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default Results;
