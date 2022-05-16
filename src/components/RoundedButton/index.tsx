import React, { FC } from 'react';
import { ButtonProps } from '@rneui/themed';
import { ButtonStyled } from './styles';

const RoundedButton: FC<ButtonProps> = ({ type, children }) => {
  return <ButtonStyled type={type}>{children}</ButtonStyled>;
};

export default RoundedButton;
