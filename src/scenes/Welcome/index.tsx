import React, { FC, useEffect } from 'react';
import { observer } from '../../modules';
import Welcome from './Welcome';

const WelcomeContainer: FC = () => {
  return <Welcome />;
};

export default observer(WelcomeContainer);
