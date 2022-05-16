import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { FlatList } from 'react-native';
import { ListItem, SceneHeader } from '../../components';
import translate from '../../locales';
import { Hint, Text, Wrapper } from './styles';

type Props = {
  isLoading: boolean;
  users: User[];
  onItemPress: (user: User) => void;
};

const UserList: FC<Props> = ({ isLoading, users, onItemPress }) => {
  return (
    <>
      <SceneHeader title={translate('fetchUsers')} showBackButton />
      <Wrapper>
        <FlatList
          ListHeaderComponent={
            <>
              <Text>{translate('pressOnAUserToEditIt')}</Text>
              {isLoading ? (
                <Hint>{translate('loading')}</Hint>
              ) : isEmpty(users) ? (
                <Hint>{translate('noUserFound')}</Hint>
              ) : (
                <></>
              )}
            </>
          }
          data={users}
          renderItem={({ item }): JSX.Element => {
            return (
              <ListItem
                title={item.name}
                onPress={() => {
                  onItemPress(item);
                }}
              />
            );
          }}
          keyExtractor={(item: User): string => `${item.id}`}
        />
      </Wrapper>
    </>
  );
};

export default UserList;
