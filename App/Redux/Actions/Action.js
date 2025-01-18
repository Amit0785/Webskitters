import {
  LOGIN_FAIL,
  CLEAR_MESSAGE,
  DATA_FAILED,
  DATA_SUCCESSED,
  LOGIN_SUCCESS,
  LOGOUT,
  PRODUCT_DETAILS,
  PRODUCT_LIST_SUCCESS,
  START_LOADING,
  STOP_LOADING,
  ADD_TO_CART,
  ADD_QUANTITY,
  DECREASE_QUANTITY,
  ORDER_LIST,
  REMOVE_FROM_CART,
  CATEGORY_LIST,
} from './Types';

// Action creator for message

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

// Action creator for loader
export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const handleFetchDataFailed = message => {
  return {
    type: DATA_FAILED,
    payload: {
      message: message,
    },
  };
};

// Action creator for login
export const loginSuccess = data => {
  console.log('======loginSuccess======>', data);
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user: data.data,
      message: data.message,
    },
  };
};

export const loginFail = message => {
  return {
    type: LOGIN_FAIL,
    payload: {
      message: message,
    },
  };
};

// Action creator for logout
export const logoutAuth = () => {
  return {
    type: LOGOUT,
  };
};

// Action creator for Product List
export const productListSuccess = data => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: {
      productList: data.data,
    },
  };
};

export const categoryListSuccess = data => {
  return {
    type: CATEGORY_LIST,
    payload: {
      categoryList: data.data,
    },
  };
};
