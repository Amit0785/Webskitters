import {
  CLEAR_MESSAGE,
  START_LOADING,
  STOP_LOADING,
  DATA_FAILED,
  DATA_SUCCESSED,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS,
  ADD_TO_CART,
} from '../Actions/Types';

const initialState = {
  productDetails: null,
  productList: [],
  message: null,
  isError: false,
  isLoading: false,
  cartList: [],
};

export default function Products(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
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
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: payload.productList,
        message: payload.message,
        isError: false,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartList: payload.product,
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
