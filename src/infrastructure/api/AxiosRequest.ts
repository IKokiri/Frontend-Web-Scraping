import axios from 'axios';
import { AuthParams } from '../../types/AuthParams';
import { ApiResponse } from '../../types/ApiResponse';
import { IApiRequest } from './IApiRequest';

class AxiosRequest implements IApiRequest {
  private url = 'http://localhost:9000/v1/user/login';

  async postRequest(params: AuthParams): Promise<ApiResponse> {
    const response = await axios
      .post(this.url, params)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error.response;
      });

    const apiResponse: ApiResponse = {
      body: response,
    };

    return apiResponse;
  }
}

export default AxiosRequest;
