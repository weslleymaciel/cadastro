import React, { FC } from 'react';
import { Text, Wrapper } from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

const ListItem: FC<Props> = ({ title, onPress }): JSX.Element => {
  return (
    <Wrapper onPress={onPress}>
      <Text>{title}</Text>
    </Wrapper>
  );
};

export default ListItem;
