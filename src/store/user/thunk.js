import {submitFCMToken} from '../../service/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TOKENAPP = 'TOKENAPP';
import {onLoginFailed, setUserLogin, onChangeUserTokenRequest} from './slide';
function updateUserToken(userToken) {
  return async dispatch => {
    try {
      dispatch(onChangeUserTokenRequest());
      dispatch(setUserLogin(userToken));
    } catch (error) {
      dispatch(onLoginFailed(error));
    }
  };
}

function saveTokenApp(tokenApp) {
  console.log('begin insert token');
  return async dispatch => {
    try {
      let token = await AsyncStorage.getItem(TOKENAPP);
      console.log('begin insert token', tokenApp);

      if (token === tokenApp) {
        console.log('token exist', tokenApp);
        return;
      }
      console.log('submit token server', tokenApp);
      let result = await submitFCMToken(tokenApp);
      let {code} = result;
      if (code === 0) {
        await AsyncStorage.setItem(TOKENAPP, tokenApp);
      }
      console.log('token result', result);
      //dispatch(saveTokenApp(tokenApp));
    } catch (error) {
      console.log('save token error', error);
    }
  };
}

export {updateUserToken, saveTokenApp};
