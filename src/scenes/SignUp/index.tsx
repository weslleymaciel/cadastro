import React, { FC, useState } from 'react';
import { Alert } from 'react-native';
import translate from '../../locales';
import { ImagePicker, launchCamera, observer } from '../../modules';
import { NavigationActions } from '../../services';
import { formatToScreenDate } from '../../utils/helpers';
import { useStores } from '../../utils/hooks';
import SignUp from './SignUp';

const UserContainer: FC = () => {
  const { goBack } = NavigationActions;
  const { userStore } = useStores();
  const [profile, setProfile] = useState(userStore.user.picture);
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isSaving, setIsSaving] = useState(false);

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const onDateSelected = (_event: any, value: any) => {
    setDate(value);
    setDatePicker(false);
  };

  const onImagePress = () => {
    launchCamera(
      {
        quality: 0.3,
        mediaType: 'photo',
        includeBase64: true,
      },
      checkPhoto,
    );
  };

  const checkPhoto = (responsePhoto: ImagePicker.ImagePickerResponse) => {
    if (responsePhoto.assets) {
      const asset = responsePhoto.assets[0];
      userStore.user.picture = `data:${asset.type};base64,${asset.base64}`;
      setProfile(userStore.user.picture);
    }
  };

  const onNameChanged = (text: string) => (userStore.user.name = text);

  const onSavePress = async () => {
    if (!userStore.user.name || !userStore.user.picture) {
      Alert.alert(translate('error'), translate('fillInAllFields'));
      return;
    }
    setIsSaving(true);
    try {
      userStore.user.birthdate = formatToScreenDate(date);
      await userStore.registerUser();
      setIsSaving(false);
      goBack();
    } catch (err) {
      setIsSaving(false);
      Alert.alert(translate('error'), err.message);
    }
  };

  return (
    <SignUp
      date={date}
      datePicker={datePicker}
      showDatePicker={showDatePicker}
      onDateSelected={onDateSelected}
      profile={profile}
      onImagePress={onImagePress}
      user={userStore.user}
      onSavePress={onSavePress}
      onNameChanged={onNameChanged}
      isSaving={isSaving}
    />
  );
};

export default observer(UserContainer);
