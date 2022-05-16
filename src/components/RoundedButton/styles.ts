import { ButtonProps } from '@rneui/base';
import { Button, styled } from '../../modules';

export const ButtonStyled = styled(Button).attrs(() => ({
  buttonStyle: {
    marginTop: 10,
    borderRadius: 100,
  },
}))<ButtonProps>``;
