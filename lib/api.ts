// api.ts
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type AnyObject = Record<string, any>;

const API_URL = `${process.env.backend_url}api/`;

const axiosApi = axios.create({
  baseURL: API_URL,
  validateStatus: (status: number) => status >= 200 && status < 600,
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);


const updateRequest = <T extends AnyObject>(url: string, data: T) => {
  axiosApi.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token") ?? ""}`;
  axiosApi.defaults.headers.common["Content-Type"] = "application/json";

  const variables = url.match(/:[a-zA-Z]+/g);

  if (variables?.length) {
    variables.forEach((param) => {
      const key = param.replace(":", "");
      const value = data[key];

      if (value !== undefined) {
        url = url.replace(param, String(value));
        delete data[key];
      }
    });
  }

  return { url, data };
};


export async function get<T = any, P extends AnyObject = AnyObject>(
  url: string,
  params?: P,
  config: AxiosRequestConfig = {}
): Promise<T> {
  const { url: newUrl, data } = updateRequest(url, params ?? ({} as P));

  const res: AxiosResponse<T> = await axiosApi.get(newUrl, {
    ...config,
    params: data,
  });
  return res.data;
}

export async function post<T = any, P extends AnyObject = AnyObject>(
  url: string,
  body?: P,
  config: AxiosRequestConfig = {}
): Promise<T> {
  const { url: newUrl, data } = updateRequest(url, body ?? ({} as P));

  const res: AxiosResponse<T> = await axiosApi.post(newUrl, data, config);
  return res.data;
}

export async function put<T = any, P extends AnyObject = AnyObject>(
  url: string,
  body?: P,
  config: AxiosRequestConfig = {}
): Promise<T> {
  const { url: newUrl, data } = updateRequest(url, body ?? ({} as P));

  const res: AxiosResponse<T> = await axiosApi.put(newUrl, data, config);
  return res.data;
}

export async function patch<T = any, P extends AnyObject = AnyObject>(
  url: string,
  body?: P,
  config: AxiosRequestConfig = {}
): Promise<T> {
  const { url: newUrl, data } = updateRequest(url, body ?? ({} as P));

  const res: AxiosResponse<T> = await axiosApi.patch(newUrl, data, config);
  return res.data;
}

export async function del<T = any, P extends AnyObject = AnyObject>(
  url: string,
  params?: P,
  config: AxiosRequestConfig = {}
): Promise<T> {
  const { url: newUrl, data } = updateRequest(url, params ?? ({} as P));

  const res: AxiosResponse<T> = await axiosApi.delete(newUrl, {
    ...config,
    params: data,
  });
  return res.data;
}


export async function postForm<T = any, P extends AnyObject = AnyObject>(
  url: string,
  body: P,
  config: AxiosRequestConfig = {}
): Promise<T> {
  axiosApi.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token") ?? ""}`;
  axiosApi.defaults.headers.common["Content-Type"] = "multipart/form-data";

  const formData = convertObjectToFormData(body);

  const res: AxiosResponse<T> = await axiosApi.post(url, formData, config);
  return res.data;
}

export async function patchForm<T = any, P extends AnyObject = AnyObject>(
  url: string,
  body: P,
  config: AxiosRequestConfig = {}
): Promise<T> {
  axiosApi.defaults.headers.common["Authorization"] =
    `Bearer ${localStorage.getItem("token") ?? ""}`;
  axiosApi.defaults.headers.common["Content-Type"] = "multipart/form-data";

  const formData = convertObjectToFormData(body);

  const res: AxiosResponse<T> = await axiosApi.patch(url, formData, config);
  return res.data;
}


export const convertObjectToFormData = (object: AnyObject): FormData => {
  const formData = new FormData();

  Object.keys(object).forEach((key) => {
    const value = object[key];

    if (value !== null && value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, value);
      }
    }
  });

  return formData;
};

export const isFile = (input: any): boolean =>
  typeof File !== "undefined" && input instanceof File;
