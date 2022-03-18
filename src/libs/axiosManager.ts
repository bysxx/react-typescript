import axios from 'axios';

export const getHeaders = () => {
  const config = {
    withCredentials: true,
  };

  return config;
};

export const getRequest = async <T>(url: string, query?: string): Promise<T> => {
  const reqQuery = `${query && query.length > 0 ? `?${query}` : ''}`;
  console.log(`[axiosManager] get: ${url + reqQuery}`);

  return axios.get<T>(url + reqQuery, getHeaders()).then((resp) => {
    console.log(`[axiosManager] get data: ${url + reqQuery}`);
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
