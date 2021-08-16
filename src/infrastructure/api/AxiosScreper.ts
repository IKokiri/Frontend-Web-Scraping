import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import headerAxios from './header/headerAxios';

class AxiosScreper {
  private url = 'http://localhost:9000/v1/crawler';

  async getCrawler(): Promise<ApiResponse> {
    const response = await axios
      .get(this.url, headerAxios())
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

export default AxiosScreper;
