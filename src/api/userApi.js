import api from 'api';

/**
 * Get user info
 *
 * @return {Promise}
 */
export function getUserInfo() {
  const url = '/users';
  return api(url, 'GET');
}

/**
 * Create user info
 *
 * @return {Promise}
 */
export function createUserInfo(body) {
  const url = '/users';
  return api(url, 'POST', body);
}

/**
 * Update user info
 *
 * @return {Promise}
 */
export function updateUserInfo(body) {
  const url = '/users';
  return api(url, 'PUT', body);
}
