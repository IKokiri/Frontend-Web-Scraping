import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import { RegisterParams } from '../../types/RegisterParams';
import headerAxios from './header/headerAxios';

class AxiosCreateuser {
  private url = 'http://localhost:9000/v1/user';

  async createUser(registerParams: RegisterParams): Promise<ApiResponse> {
    const resultCreateuser = await axios
      .post(this.url, registerParams, headerAxios())
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
          body: error.response,
        };
        return err;
      });

    const apiResponse: ApiResponse = resultCreateuser;

    return apiResponse;
  }
}

export default AxiosCreateuser;
