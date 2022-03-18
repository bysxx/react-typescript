import axios from 'axios';

export const getHeaders = () => {
  const config = {
    withCredentials: true,
  };

  return config;
};

export const getRequest = async <T>(url: string, config: any): Promise<T> => {
  console.log(`[axiosManager] get: ${url}`);

  return axios.get<T>(url, config).then((resp) => {
    console.log(`[axiosManager] get data: ${JSON.stringify(resp)}`);
    return resp.data;
  });
};

export const postRequest = async <T>(url: string, body: any, onError?: (e: any) => void) => {
  console.log(`[axiosManager] post: ${url}`);
  const result = axios
    .post<T>(url, body, getHeaders())
    .then((resp) => {
      console.log(`[axiosManager] post data: ${resp}`);
      return resp;
    })
    .catch((e) => {
      onError(e);
    });

  return result;
};
