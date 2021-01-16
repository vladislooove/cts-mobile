
// Libs
import React, { FC, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { Controller, useForm, ControllerRenderProps } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';
import SectionTitle from '../../components/SectionTitle';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

// Selectors
import { user$, jobRoles$ } from '../../containers/App/selectors';

// Actions
import { updateUser } from './actions';

// Constants
import { ACCOUNT_SAGA } from './constants';

// Saga
import saga from './sagas';

// Hooks
import { useInjectSaga } from '../../hooks/reduxInjectors';

// Styles
import styles from './styles';
import { COLOR_SECONDARY } from '../../styles/constants';

// Types
import { User } from '../../services/user/types';

export const Account: FC = () => {
  const user = useSelector(user$);
  const jobRoles = useSelector(jobRoles$);
  const dispatch = useDispatch();
  useInjectSaga({ key: ACCOUNT_SAGA, saga });

  const mappedJobRoles = useMemo(() => {
    return jobRoles.map(({ id, name }) => ({
      key: id,
      value: id,
      label: name,
    }))
  }, [jobRoles]);

  const { control, handleSubmit, formState } = useForm();

  const renderInput = ({ onChange, value }: ControllerRenderProps, placeholder: string) => (
    <Input
      onChangeText={onChange}
      placeholder={placeholder}
      value={value}
    />
  );

  const renderSelect = ({ onChange, value }: ControllerRenderProps) => (
    <Select
      placeholder="Job role*"
      title="Job role"
      options={mappedJobRoles}
      value={value}
      onChange={(option) => onChange(option.value)}
    />
  );

  const onSubmit = (data: Partial<User>) => {
    dispatch(updateUser(data));
  };


  return (
    <View style={styles.wrapper}>
      <Navigation />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleWrapper}>
          <Title>
            My account
          </Title>
        </View>
        <View style={styles.sectionTitleWrapper}>
          <SectionTitle
            title="Personal details"
            color={COLOR_SECONDARY}
          />
        </View>
        <Controller
          name={'name'}
          control={control}
          defaultValue={user?.name ?? ''}
          render={(props) => renderInput(props, 'Name*')}
        />
        <Controller
          name={'surname'}
          control={control}
          defaultValue={user?.surname ?? ''}
          render={(props) => renderInput(props, 'Surname*')}
        />
        <Controller
          name={'phoneNumber'}
          control={control}
          defaultValue={user?.phoneNumber ?? ''}
          render={(props) => renderInput(props, 'Mobile number')}
        />
        <Controller
          name={'jobRole'}
          control={control}
          defaultValue={user?.jobRole ?? ''}
          render={renderSelect}
        />
        <View style={styles.sectionTitleWrapper}>
          <SectionTitle
            title="Login details"
            color={COLOR_SECONDARY}
          />
        </View>
        <Controller
          name={'email'}
          control={control}
          defaultValue={user?.email ?? ''}
          render={(props) => renderInput(props, 'Email*')}
        />
        <View style={styles.footer}>
          <Button
            title="Submit"
            disabled={!formState.isDirty}
            onPress={handleSubmit(onSubmit)}
            primary
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Account;
