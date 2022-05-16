import moment from 'moment';

const ISO_DATE_HOUR = 'YYYY-MM-DDTHH:mm:ss';
const SCREEN_DATE = 'DD/MM/YYYY';

export const formatToScreenDate = (date: Date | string): string =>
  moment.utc(subtractHours(1, date), ISO_DATE_HOUR).format(SCREEN_DATE);

export const formatDateToISO = (date: Date | string): string =>
  moment.utc(date, SCREEN_DATE).toISOString();

export const subtractHours = (hours: number, date: Date | string): string =>
  moment(moment(date).subtract(hours, 'h')).format(ISO_DATE_HOUR);

export const addDays = (days: number, date: Date | string): string =>
  moment(moment(date).add(days, 'd')).format(ISO_DATE_HOUR);
