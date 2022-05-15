import React, { FC } from 'react';
import { observer } from '../../modules';
import SignUp from './SignUp';

const SignUpContainer: FC = () => {
  return <SignUp />;
};

export default observer(SignUpContainer);
