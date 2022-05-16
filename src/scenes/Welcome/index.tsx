import React, { FC } from 'react';
import { observer } from '../../modules';
import { NavigationActions } from '../../services';
import { Routes } from '../../utils/enums';
import { useStores } from '../../utils/hooks';
import Welcome from './Welcome';

const WelcomeContainer: FC = () => {
  const { userStore } = useStores();
  const { navigate } = NavigationActions;

  const clearUserdata = () => {
    userStore.user.name = '';
    userStore.user.picture = '';
    userStore.users = [];
  };

  const onSignUpPress = () => {
    clearUserdata();
    navigate(Routes.SIGN_UP);
  };

  const onFetchUsersPress = () => {
    clearUserdata();
    navigate(Routes.USER_LIST);
  };

  return (
    <Welcome
      onSignUpPress={onSignUpPress}
      onFetchUsersPress={onFetchUsersPress}
    />
  );
};

export default observer(WelcomeContainer);
