import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_MESSAGE,
  START_LOADING,
  STOP_LOADING,
  DATA_FAILED,
  DATA_SUCCESSED,
} from '../Actions/Types';

const initialState = {
  isLoggedIn: false,
  user: null,
  message: null,
  isError: false,
  isLoading: false,
  accessToken: null,
};

export default function Auth(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        message: payload.message,
        isError: false,
        accessToken: payload.user?.accessToken,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload.message,
        isError: true,
      };
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
        isError: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: null,
        isError: false,
      };

    case DATA_FAILED:
      return {
        ...state,
        message: payload.message,
        isError: true,
      };

    default:
      return state;
  }
}
