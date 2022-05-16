import React from 'react';
import { SvgXml } from 'react-native-svg';
import { observer } from '../../modules';
import { useStores } from '../../utils/hooks';
import { Wrapper } from './styles';

type Props = {
  name: string;
  color?: string;
  width?: number;
  height?: number;
  touchable?: boolean;
  onPress?: () => void;
};

const Svg: React.FC<Props> = ({
  name,
  color,
  width,
  height,
  touchable,
  onPress,
  ...rest
}) => {
  const { assetsStore } = useStores();

  const scaledWidth = (): number => {
    const svg = assetsStore.getValue(name as keyof XmlSvg);
    if (height) return (height / svg.height) * svg.width;
    return svg.width;
  };

  const scaledHeight = (): number => {
    const svg = assetsStore.getValue(name as keyof XmlSvg);
    if (width) return (width / svg.width) * svg.height;
    return svg.height;
  };

  const iconComponent = (): JSX.Element => {
    const svg = assetsStore.getValue(name as keyof XmlSvg);
    return (
      <SvgXml
        fill={color}
        width={width ?? scaledWidth()}
        height={height ?? scaledHeight()}
        xml={svg.xml}
      />
    );
  };

  return (
    <Wrapper
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      disabled={!touchable}
      onPress={onPress}
      {...rest}
    >
      {iconComponent()}
    </Wrapper>
  );
};

export default observer(Svg);
