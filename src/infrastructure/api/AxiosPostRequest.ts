import axios from 'axios';
import { AuthParams } from '../../types/AuthParams';
import { ApiResponse } from '../../types/ApiResponse';
import { IApiPostRequest } from './IApiPostRequest';
import headerAxios from './header/headerAxios';

class AxiosPostRequest implements IApiPostRequest {
  private url = 'http://localhost:9000/v1/user/login';

  async postRequest(params: AuthParams): Promise<ApiResponse> {
    const response = await axios
      .post(this.url, params, headerAxios())
      .then((data) => {
        const success: ApiResponse = {
          statusCode: 200,
          body: data,
        };
        return success;
      })
      .catch((error) => {
        const err: ApiResponse = {
          statusCode: error.response.status,
          body: error.response.data,
        };
        return err;
      });

    const apiResponse: ApiResponse = response;

    return apiResponse;
  }
}

export default AxiosPostRequest;
