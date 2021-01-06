// Libs
import React, { FC, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, Text, Linking } from 'react-native';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SectionTitle from '../../components/SectionTitle';
import Input from '../../components/Input';
import Select from '../../components/Select';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

// Selectors
import { ccgs$, practices$, jobRoles$ } from '../../containers/App/selectors';

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

// Types
import { Option } from '../../components/Select/types';

export const Signup: FC = () => {
  const ccgs = useSelector(ccgs$);
  const practices = useSelector(practices$);
  const jobRoles = useSelector(jobRoles$);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [ccg, setCCG] = useState('');
  const [practice, setPractice] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAcceptingTerms, setIsAcceptingTerms] = useState(false);

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

  const mappedJobRoles = useMemo(() => {
    return jobRoles.map(({ id, name }) => ({
      key: id,
      value: id,
      label: name,
    }))
  }, [jobRoles]);

  const onCCGChange = (option: Option) => {
    setCCG(option.value);
    setPractice('');
  };

  const onPracticeChange = (option: Option) => setPractice(option.value);
  const onJobRoleChange = (option: Option) => setJobRole(option.value);
  const onUserTermsClick = () => Linking.openURL('https://cthesigns.co.uk/terms-of-use');
  const onPrivacyPolicyClick = () => Linking.openURL('https://cthesigns.co.uk/privacy');

  const isFormValid = firstName
    && surname
    && ccg
    && practice
    && jobRole
    && email
    && password
    && confirmPassword
    && password === confirmPassword
    && isAcceptingTerms;

  const onFormSubmit = () => {

  };

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
        <Select
          onChange={onJobRoleChange}
          options={mappedJobRoles}
          placeholder="Job role*"
          title="Job role"
          value={jobRole}
          disabled={!(ccg && practice)}
          hideLetters
        />
        <View style={styles.sectionTitleWrapper}>
          <SectionTitle
            title="Login details"
            color={COLOR_SECONDARY}
          />
        </View>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Email*"
          value={email}
          onChangeText={setEmail}
        />
        <PasswordInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password*"
          value={password}
          onChangeText={setPassword}
        />
        <PasswordInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Confirm password*"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text style={styles.note}>
          Please review our User terms and Privacy policy here before you accept and sign up:
        </Text>
        <View style={styles.buttonRow}>
          <View style={styles.buttonCol}>
            <Button
              title="User terms"
              onPress={onUserTermsClick}
              primary
            />
          </View>
          <View style={styles.buttonCol}>
            <Button
              title="Privacy policy"
              onPress={onPrivacyPolicyClick}
              primary
            />
          </View>
        </View>
        <Checkbox
          label="I have read and agree to the User terms and Privacy policy"
          value={isAcceptingTerms}
          onChange={setIsAcceptingTerms}
        />
        <View style={styles.footer}>
          <Button
            title="Sign up"
            onPress={onFormSubmit}
            primary
            disabled={!isFormValid}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
