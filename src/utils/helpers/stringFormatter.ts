export const capitalize = (value: string): string => {
  return value.toLowerCase().replace(/(?:^|\s)\S/g, (str) => str.toUpperCase());
};
