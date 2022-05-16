import { XmlSvg } from '../assets/XmlSvg';
import { action } from '../modules';

const svgJson = XmlSvg as XmlSvg;

export default class ThemeStore {
  svg: XmlSvg = svgJson;

  @action
  getValue = (key: keyof XmlSvg): Svg => {
    return this.svg[key];
  };
}
