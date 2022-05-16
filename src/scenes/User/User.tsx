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
  onRemovePress: () => void;
  onNameChanged: (text: string) => void;
  isSaving: boolean;
  isRemoving: boolean;
};

const User: FC<Props> = ({
  date,
  datePicker,
  showDatePicker,
  onDateSelected,
  profile,
  onImagePress,
  user,
  onSavePress,
  onRemovePress,
  onNameChanged,
  isSaving,
  isRemoving,
}) => {
  return (
    <>
      <SceneHeader title={translate('user')} showBackButton />
      <Wrapper>
        <Avatar onPress={onImagePress}>
          <Image
            source={{
              uri: profile,
            }}
          />
        </Avatar>
        <Input label={translate('code')} disabled>
          {user.id}
        </Input>
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
            disabled={isSaving || isRemoving}
            loading={isSaving}
            onPress={onSavePress}
            title="Solid"
            type="solid"
          >
            {translate('save')}
          </RoundedButton>
          <RoundedButton
            disabled={isSaving || isRemoving}
            loading={isRemoving}
            onPress={onRemovePress}
            title="Solid"
            type="outline"
          >
            {translate('remove')}
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
export default User;
