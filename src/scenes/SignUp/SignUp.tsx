import React, { FC } from 'react';
import { RoundedButton, SceneHeader } from '../../components';
import translate from '../../locales';
import { Input, RNDateTimePicker } from '../../modules';
import { formatToScreenDate } from '../../utils/helpers';
import { Avatar, ButtonWrapper, Image, Wrapper } from './styles';

type Props = {
  date: Date;
  datePicker: boolean;
  showDatePicker: () => void;
  onDateSelected: (event: any, value: any) => void;
  profile: string;
  onImagePress: () => void;
  user: User;
  onSavePress: () => void;
  onNameChanged: (text: string) => void;
  isSaving: boolean;
};

const SignUp: FC<Props> = ({
  date,
  datePicker,
  showDatePicker,
  onDateSelected,
  profile,
  onImagePress,
  user,
  onSavePress,
  onNameChanged,
  isSaving,
}) => {
  return (
    <>
      <SceneHeader title={translate('signUp')} showBackButton />
      <Wrapper>
        <Avatar onPress={onImagePress}>
          <Image
            source={{
              uri: !!profile
                ? profile
                : 'https://t4.ftcdn.net/jpg/03/38/46/23/360_F_338462346_wZZhUA9S6daekMfyuF8cBssJgj4nao8M.jpg',
            }}
          />
        </Avatar>
        <Input onChangeText={onNameChanged} label={translate('name')}>
          {user.name}
        </Input>
        <Input
          onPressIn={showDatePicker}
          label={translate('birthdate')}
          showSoftInputOnFocus={false}
        >
          {formatToScreenDate(date)}
        </Input>
        <ButtonWrapper>
          <RoundedButton
            disabled={isSaving}
            loading={isSaving}
            onPress={onSavePress}
            title="Solid"
            type="solid"
          >
            {translate('signUp')}
          </RoundedButton>
        </ButtonWrapper>

        {datePicker && (
          <RNDateTimePicker
            value={date as Date}
            mode={'date'}
            onChange={onDateSelected}
          />
        )}
      </Wrapper>
    </>
  );
};
export default SignUp;
