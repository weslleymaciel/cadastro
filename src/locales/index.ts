import I18n from 'i18n-js';
import pt from './pt-BR';

I18n.translations = {
  'pt-BR': pt,
};

I18n.locale = 'pt-BR';

const translate = (
  key: keyof Locale,
  placeholders?: Record<string, string | number>,
) => I18n.t(key, placeholders);

export default translate;
