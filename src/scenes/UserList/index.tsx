import React, { FC, useCallback } from 'react';
import { observer, useFocusEffect } from '../../modules';
import { NavigationActions } from '../../services';
import { Routes } from '../../utils/enums';
import { useStores } from '../../utils/hooks';
import UserList from './UserList';

const UserListContainer: FC = () => {
  const { userStore } = useStores();
  const { navigate } = NavigationActions;

  const onItemPress = (user: User) => {
    userStore.user = user;
    navigate(Routes.USER);
  };

  useFocusEffect(
    useCallback(() => {
      userStore.getUsers();
    }, []),
  );

  return <UserList users={userStore.users} onItemPress={onItemPress} />;
};

export default observer(UserListContainer);
