import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import If from '../If';
import { Subtitle, Title, Wrapper } from './styles';

type Props = {
  title: string;
  subtitle?: string;
};

const HeaderTitle: FC<Props> = ({ title, subtitle }): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <If condition={!isEmpty(subtitle)}>
        <Subtitle>{subtitle}</Subtitle>
      </If>
    </Wrapper>
  );
};

export default HeaderTitle;
