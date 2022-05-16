import React, { FC } from 'react';
import { observer } from '../../modules';
import { NavigationActions } from '../../services';
import { Routes } from '../../utils/enums';
import Welcome from './Welcome';

const WelcomeContainer: FC = () => {
  const { navigate } = NavigationActions;

  const onSignUpPress = () => {
    navigate(Routes.SIGN_UP);
  };

  const onFetchUsersPress = () => {
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
