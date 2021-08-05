import { AuthParams } from '../../types/AuthParams';

export interface IApiRequest {
  postRequest(params: AuthParams): Promise<void>;
}
