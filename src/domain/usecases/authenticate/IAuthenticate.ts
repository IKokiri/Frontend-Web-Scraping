import { AuthParams } from '../../../types/AuthParams';

export interface IAuthenticate {
  auth(params: AuthParams): string;
}
