import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import headerAxios from './header/headerAxios';
import { IApiDeleteNotebook } from './IApiDeleteNotebook';

class AxiosDeleteNotebook implements IApiDeleteNotebook {
  private url = 'http://localhost:9000/v1/';

  async remove(id: number): Promise<ApiResponse> {
    const resultDelete = await axios
      .delete(`${this.url}notebook/${id}/remove`, headerAxios())
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

    const apiResponse: ApiResponse = resultDelete;

    return apiResponse;
  }
}

export default AxiosDeleteNotebook;
