// Libs
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux'; 
import { AlphabetList } from "react-native-section-alphabet-list";

// Components
import SectionTitle from '../../../../components/SectionTitle';

// Selectors
import { factors$ } from '../../../../containers/System/selectors';

// Styles
import { COLOR_SECONDARY } from '../../../../styles/constants';

export const FactorsList: FC = () => {
  const factors = useSelector(factors$);
  const mappedFactors = useMemo(() => factors.map((item) => ({
    value: item.name,
    key: item.id,
  })), [factors]);

  return (
    <AlphabetList
      data={mappedFactors}
      indexLetterColor={COLOR_SECONDARY}
      // renderCustomItem={(item) => (
      //   <View style={styles.listItemContainer}>
      //     <Text style={styles.listItemLabel}>{item.value}</Text>
      //   </View>
      // )}
      renderCustomSectionHeader={(section) => <SectionTitle title={section.title} color={COLOR_SECONDARY} round />}
    />
  );
};

export default FactorsList;
