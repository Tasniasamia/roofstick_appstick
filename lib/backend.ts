import { get, post } from "./api";
export const postSignup = <
  TRequest extends Record<string, any>,
  TResponse
>(data: TRequest) =>
  post<TResponse>('/user/registration', data);

export const sendOtp = <
  TRequest extends Record<string, any>,
  TResponse
>(data: TRequest) =>
  post<TResponse>('/user/send-otp', data);
export const verifyOtp = <
  TRequest extends Record<string, any>,
  TResponse
>(data: TRequest) =>
  post<TResponse>('/user/verify-otp', data);
export const login = <
  TRequest extends Record<string, any>,
  TResponse
>(data: TRequest) =>
  post<TResponse>('/user/login', data);
export const getProfile = <
  TRequest extends Record<string, any>,
  TResponse
>(data: TRequest) =>
  get<TResponse>('/user', data);
export const updateProfile = <
  TRequest extends Record<string, any>,
  TResponse
>(data: TRequest) =>
  post<TResponse>('/user', data);
