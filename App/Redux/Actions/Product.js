import {
  stopLoading,
  clearMessage,
  startLoading,
  productListSuccess,
  handleFetchDataFailed,
} from './Action';
import * as Apis from '../../Services/Apis';

export const getProductList = (page, limit) => dispatch => {
  dispatch(startLoading());
  dispatch(clearMessage());
  return Apis.fetchProductList(page, limit).then(
    data => {
      if (!data) return dispatch(stopLoading());
      if (data) {
        dispatch(stopLoading());
        dispatch(productListSuccess(data));
      } else {
        dispatch(stopLoading());
        dispatch(handleFetchDataFailed(data?.message));
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

      dispatch(handleFetchDataFailed(message));
      dispatch(stopLoading());
      return Promise.reject(error);
    },
  );
};
