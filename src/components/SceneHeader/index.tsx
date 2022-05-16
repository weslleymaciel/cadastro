import React, { FC } from 'react';
import { NavigationActions } from '../../services';
import HeaderButton from '../HeaderButton';
import { Header, Wrapper } from './styles';

type Props = {
  title: string;
  leftHeaderButton?: React.ReactNode;
  rightHeaderButton?: React.ReactNode;
  showBackButton?: boolean;
};

const SceneHeader: FC<Props> = ({
  title,
  leftHeaderButton,
  rightHeaderButton,
  showBackButton,
  ...rest
}): JSX.Element => {
  const { goBack } = NavigationActions;

  const leftButton = (): React.ReactNode =>
    showBackButton ? (
      <HeaderButton name="arrowLeft" onPress={goBack} />
    ) : (
      leftHeaderButton ?? <></>
    );

  const rightButton = (): React.ReactNode => rightHeaderButton ?? <></>;

  return (
    <Wrapper {...rest}>
      <Header title={title} headerLeft={leftButton} headerRight={rightButton} />
    </Wrapper>
  );
};

export default SceneHeader;
