import { AuthorizationStatus } from './const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Auth;

export function errorHandle(err: unknown) {
  throw new Error('Function not implemented.');
}
