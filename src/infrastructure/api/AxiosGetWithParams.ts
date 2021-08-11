import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import headerAxios from './header/headerAxios';
import { IApiGetWithParams } from './IApiGetWithParams';

class AxiosGetWithParams implements IApiGetWithParams {
  private url = 'http://localhost:9000/v1/crawler/findById/';

  async getWithParams(id: number): Promise<ApiResponse> {
    const response = await axios
      .get(`${this.url}${id}`, headerAxios())
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
          body: '',
        };
        return err;
      });

    const apiResponse: ApiResponse = response;

    return apiResponse;
  }
}

export default AxiosGetWithParams;
