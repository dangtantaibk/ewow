import axios from 'axios';
import axiosRetry from 'axios-retry';

import systemConfig from '../config/system';

const axiosInstance = axios.create({
  baseURL: `${systemConfig.BASE_URL}`,
  timeout: systemConfig.API_TIMEOUT,
});

axiosRetry(axiosInstance, {
  retries: systemConfig.API_RETRIES,
  retryDelay: retryCount => retryCount * 1000,
});

export default axiosInstance;
