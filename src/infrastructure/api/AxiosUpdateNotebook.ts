import axios from 'axios';
import { ApiResponse } from '../../types/ApiResponse';
import { Notebook } from '../../types/Notebook';
import headerAxios from './header/headerAxios';
import { IApiUpdateNotebook } from './IApiUpdateNotebook';

class AxiosUpdateNotebook implements IApiUpdateNotebook {
  private url = 'http://localhost:9000/v1/notebook/';

  async update(id: number, notebook: Notebook): Promise<ApiResponse> {
    const resultUpdate = await axios
      .put(`${this.url}${id}`, notebook, headerAxios())
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

    const apiResponse: ApiResponse = resultUpdate;

    return apiResponse;
  }
}

export default AxiosUpdateNotebook;
