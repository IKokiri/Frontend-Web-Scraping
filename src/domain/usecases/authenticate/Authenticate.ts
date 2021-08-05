import { IAuthenticate } from './IAuthenticate';
import { IApiRequest } from '../../../infrastructure/api/IApiRequest';
import { AuthParams } from '../../../types/AuthParams';
import { ApiResponse } from '../../../types/ApiResponse';

class Authenticate implements IAuthenticate {
  constructor(private apiRequest: IApiRequest) {}

  async auth(params: AuthParams): Promise<ApiResponse> {
    return this.apiRequest.postRequest(params);
  }
}

export default Authenticate;
