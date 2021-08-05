import { IAuthenticate } from './IAuthenticate';
import { IApiRequest } from '../../../infrastructure/api/IApiRequest';
import { AuthParams } from '../../../types/AuthParams';

class Authenticate implements IAuthenticate {
  constructor(private apiRequest: IApiRequest) {}

  auth(params: AuthParams): string {
    this.apiRequest.postRequest(params);
    return 'a';
  }
}

export default Authenticate;
