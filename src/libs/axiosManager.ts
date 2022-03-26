import axios from 'axios';

export const getRequest = async <T>(url: string, config?: any, callback?: () => void): Promise<T> => {
  console.log(`[axiosManager] get: ${url}, config ${JSON.stringify(config)}`);

  const result = axios.get<T>(url, config).then((resp) => {
    console.log(`[axiosManager] get data: ${JSON.stringify(resp)}`);
    return resp.data;
  });

  return result;
};

export const postRequest = async <T>(url: string, body: any, config: any, onError?: (e: any) => void) => {
  console.log(`[axiosManager] post: ${url}`);
  const result = axios
    .post<T>(url, body, config)
    .then((resp) => {
      console.log(`[axiosManager] post data: ${resp}`);
      return resp;
    })
    .catch((e) => {
      onError(e);
    });

  return result;
};
