import React, { FC } from 'react';
import { RoundedButton, SceneHeader } from '../../components';
import translate from '../../locales';
import { ButtonWrapper, Image, Text, Title, Wrapper } from './styles';

type Props = {
  onSignUpPress: () => void;
  onFetchUsersPress: () => void;
};

const Welcome: FC<Props> = ({ onSignUpPress, onFetchUsersPress }) => {
  return (
    <>
      <SceneHeader title={translate('appName')} />
      <Wrapper>
        <Title>{translate('welcome')}</Title>
        <Image
          source={{
            uri: 'https://assets.website-files.com/5f7b38d0d8ee17447789def1/5f7b38d0d8ee176ea289df10_ilustra%20numeros.gif',
          }}
        />
        <Text>{translate('registerNewUsersOrMakeAnInquiry')}</Text>
        <ButtonWrapper>
          <RoundedButton onPress={onFetchUsersPress} title="Solid" type="solid">
            {translate('fetchUsers')}
          </RoundedButton>
          <RoundedButton onPress={onSignUpPress} title="Solid" type="outline">
            {translate('signUp')}
          </RoundedButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};
export default Welcome;
