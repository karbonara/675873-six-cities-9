export enum AppRoute {
  Root = '',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CityTabs = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const SortPopup = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const AVATAR_URL = 'https://i.pravatar.cc/128';
export const HEIGHT_LOGO = 41;
export const WIDTH_LOGO = 81;
export const STYLE_RATING = 20;
export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export const MAP_HEIGHT = '100%';
export const ICON_SIZE = 40;
export const ICON_ANCHOR = 20;
export const REVIEWS_USER_AVATAR = 54;
export const PROPERTY_USER_AVATAR = 74;
