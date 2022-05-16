import React, { FC, useCallback, useState } from 'react';
import { observer, useFocusEffect } from '../../modules';
import { NavigationActions } from '../../services';
import { Routes } from '../../utils/enums';
import { useStores } from '../../utils/hooks';
import UserList from './UserList';

const UserListContainer: FC = () => {
  const { userStore } = useStores();
  const { navigate } = NavigationActions;
  const [isLoading, setIsLoading] = useState(false);

  const onItemPress = (user: User) => {
    userStore.user = user;
    navigate(Routes.USER);
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    await userStore.getUsers();
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchUsers();
    }, []),
  );

  return (
    <UserList
      isLoading={isLoading}
      users={userStore.users}
      onItemPress={onItemPress}
    />
  );
};

export default observer(UserListContainer);
