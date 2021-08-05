import axios from 'axios';
import { AuthParams } from '../../types/AuthParams';
import { IApiRequest } from './IApiRequest';

class AxiosRequest implements IApiRequest {
  private url = 'http://localhost:9000/v1/user/login';

  async postRequest(params: AuthParams): Promise<void> {
    await axios
      .post(this.url, params)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }
}

export default AxiosRequest;
