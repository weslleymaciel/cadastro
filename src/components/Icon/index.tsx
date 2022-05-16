import React, { FC } from 'react';
import Svg from '../Svg';

type Props = {
  name: string;
  onPress?: () => void;
};

const Icon: FC<Props> = ({ name, onPress, ...rest }) => (
  <Svg name={name} onPress={onPress} {...rest} />
);

export default Icon;
