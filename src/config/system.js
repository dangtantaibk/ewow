import Config from 'react-native-config';

export default {
  API_RETRIES: parseInt(Config.API_RETRIES, 2),
  API_TIMEOUT: parseInt(Config.API_TIMEOUT, 2),
  BASE_URL: Config.BASE_URL,
  ENVIRONMENT: Config.ENVIRONMENT,
};
