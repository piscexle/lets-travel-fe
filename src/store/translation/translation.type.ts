export interface TranslateType {
  vn_VN: string;
  en_US: string;
  // ko_KR?: string;
}

// eslint-disable-next-line no-shadow
export enum TranslateEnum {
  vn_VN = 'vn_VN',
  en_US = 'en_US',
}

// eslint-disable-next-line no-shadow
export enum LocaleEnum {
  vi = 'vi',
  en = 'en',
}

export interface LocaleType {
  [key: string]: string;
}
