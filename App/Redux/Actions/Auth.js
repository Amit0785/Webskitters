import {
  stopLoading,
  clearMessage,
  startLoading,
  loginSuccess,
  loginFail,
} from './Action';
import routes from '../../Navigation/routes';
import {TOKEN} from '../../Services/Keyword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Apis from '../../Services/Apis';
import Toast from 'react-native-simple-toast';

export const loginAction = (values, navigation) => dispatch => {
  dispatch(startLoading());
  dispatch(clearMessage());
  return Apis.fetchLogin(values).then(
    async data => {
      if (!data) return dispatch(stopLoading());
      if (data) {
        AsyncStorage.setItem(TOKEN, data.accessToken);
        dispatch(loginSuccess(data));
        dispatch(stopLoading());
        Toast.show('Login successfully');
        navigation.replace(routes.ProductList);
      } else {
        dispatch(loginFail(data.message));
        dispatch(stopLoading());
      }
      return Promise.resolve();
    },
    error => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch(stopLoading());
      dispatch(loginFail(message));
      return Promise.reject(error);
    },
  );
};

export const fetchLogout = () => {
  AsyncStorage.removeItem(TOKEN);
};
