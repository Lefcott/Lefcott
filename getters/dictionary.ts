export type Dictionary = typeof import("@/app/i18n/dictionaries/en.json");

let dictionary: Dictionary;
let locale: "es" | "en";

export const setDictionary = (dict: Dictionary) => {
  dictionary = dict;
};

export const getDictionary = () => {
  return dictionary;
};

export const setLocale = (_locale: "es" | "en") => {
  locale = _locale;
};

export const getLocale = () => {
  return locale;
};
