// Libs
import React, { FC, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SectionTitle from '../../components/SectionTitle';
import Input from '../../components/Input';
import Select from '../../components/Select';

// Selectors
import { ccgs$, practices$ } from '../../containers/App/selectors';

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

// Types
import { Option } from '../../components/Select/types';

export const Signup: FC = () => {
  const ccgs = useSelector(ccgs$);
  const practices = useSelector(practices$);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [ccg, setCCG] = useState('');
  const [practice, setPractice] = useState('');

  const mappedCCGs = useMemo(() => {
    return ccgs.map(({ id, name }) => ({
      label: name,
      value: id,
      key: id,
    }));
  }, [ccgs]);

  const mappedPractices = useMemo(() => {
    return practices
      .filter((item) => item.ccg === ccg)
      .map(({ id, name }) => ({
        label: name,
        value: id,
        key: id,
      }));
  }, [practices, ccg]);

  const onCCGChange = (option: Option) => {
    setCCG(option.value);
    setPractice('');
  };

  const onPracticeChange = (option: Option) => setPractice(option.value);

  return (
    <View style={styles.wrapper}>
      <Navigation hideInternalMenu />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleWrapper}>
          <Title>
            Sign up
          </Title>
        </View>
        <View style={styles.sectionTitleWrapper}>
          <SectionTitle
            title="Personal details"
            color={COLOR_SECONDARY}
          />
        </View>
        <Input
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First name*"
        />
        <Input
          value={surname}
          onChangeText={setSurname}
          placeholder="Surname*"
        />
        <Select
          onChange={onCCGChange}
          options={mappedCCGs}
          placeholder="CCG name*"
          title="CCG name"
          value={ccg}
        />
        <Select
          onChange={onPracticeChange}
          options={mappedPractices}
          placeholder="Practice name*"
          title="Practice name"
          value={practice}
          disabled={!ccg}
        />
      </ScrollView>
    </View>
  );
};

export default Signup;
