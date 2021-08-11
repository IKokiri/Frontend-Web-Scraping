import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import headerAxios from './header/headerAxios';
import { IApiGetRequest } from './IApiGetRequest';

class AxiosGetRequest implements IApiGetRequest {
  private url = 'http://localhost:9000/v1/notebook';

  async getRequest(): Promise<ApiResponse> {
    const response = await axios
      .get(this.url, headerAxios())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });

    const apiResponse: ApiResponse = {
      body: response,
    };

    return apiResponse;
  }
}

export default AxiosGetRequest;
