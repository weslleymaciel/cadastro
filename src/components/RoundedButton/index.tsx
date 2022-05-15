import React, { FC } from 'react';
import { ButtonProps } from '@rneui/themed';
import { ButtonStyled } from './styles';

const RoundedButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default RoundedButton;
