import React from 'react';
import { HeaderIcon } from './styles';

type Props = {
  name: string;
  onPress(): void;
};

const HeaderButton: React.FC<Props> = ({ name, onPress, ...rest }) => (
  <HeaderIcon name={name} onPress={onPress} {...rest} />
);

export default HeaderButton;
