import React, { FC } from 'react';
import { RoundedButton } from '../../components';
import translate from '../../locales';
import { NavigationActions } from '../../services';
import { Routes } from '../../utils/enums';
import { Wrapper } from './styles';

const Welcome: FC = () => {
  const { navigate } = NavigationActions;
  return (
    <Wrapper>
      <RoundedButton
        onPress={() => {
          navigate(Routes.SIGN_UP);
        }}
        title="Solid"
        type="solid"
      >
        {translate('welcome')}
      </RoundedButton>
    </Wrapper>
  );
};
export default Welcome;
