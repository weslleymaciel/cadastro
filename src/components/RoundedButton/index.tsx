import React, { FC } from 'react';
import { ButtonProps } from '@rneui/themed';
import { ButtonStyled } from './styles';

const RoundedButton: FC<ButtonProps> = ({
  disabled,
  loading,
  onPress,
  type,
  children,
}) => {
  return (
    <ButtonStyled
      disabled={disabled}
      loading={loading}
      onPress={onPress}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default RoundedButton;
