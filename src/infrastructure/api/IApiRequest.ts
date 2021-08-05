import { ApiResponse } from '../../types/ApiResponse';
import { AuthParams } from '../../types/AuthParams';

export interface IApiRequest {
  postRequest(params: AuthParams): Promise<ApiResponse>;
}
