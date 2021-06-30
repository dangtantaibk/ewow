import axios from 'axios';
import axiosInstance from './axios';

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    try {
      const originalRequest = error.config;
      // if (error.response && error.response.status === 401) {
      //   const stateFromStore = store.getState();
      //   const credentials: any = await auth0.auth
      //     .refreshToken({
      //       refreshToken: stateFromStore.AuthStore.session.refreshToken || "",
      //       scope
      //     });
      //   store.dispatch(refreshTokenSuccess(credentials));
      //   originalRequest.headers.Authorization = `${credentials.tokenType} ${credentials.accessToken}`;
      return axios(originalRequest);
      // } else {
      //   return Promise.reject(error);
      // }
    } catch (e) {
      return Promise.reject(error);
    }
  },
);

export class ApiError extends Error {
  constructor(status, message, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

/**
 * Set authorization token for all apis
 *
 * @param {string} token An authorization token from server
 */
export function setAuthorizationHeader(token, type) {
  axiosInstance.defaults.headers.common.Authorization = `${type} ${token}`;
}

/**
 * Handle all errors from server and application
 *
 * @param {Error} error An error from axios library
 * @return {Object}
 */
export function handlingErrors(error) {
  let message;
  let status;
  let code;

  try {
    if (error.response) {
      message = error.response.data.description;
      status = error.response.status;
      code = error.response.data.code;
    } else {
      message = error.message;
    }
  } catch (e) {
    message = e.message;
  }

  return new ApiError(status, message, code);
}

const api = (url, method, data, headers) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.request({
        data,
        headers: {
          ...axiosInstance.defaults.headers.common,
          ...headers,
        },
        method,
        url,
      });
      resolve(response);
    } catch (e) {
      reject(handlingErrors(e));
    }
  });
};
/**
 * As middleware for API calling
 *
 * @param {string} url URL endpoint
 * @param {RequestMethodType} method Rest API method
 * @param {Object} data Body of rest API
 * @param {Object} headers Header of rest API
 * @return {Promise}
 */
export default api;
