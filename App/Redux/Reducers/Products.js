import {
  CLEAR_MESSAGE,
  START_LOADING,
  STOP_LOADING,
  DATA_FAILED,
  DATA_SUCCESSED,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS,
  ADD_TO_CART,
  ADD_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  CATEGORY_LIST,
} from '../Actions/Types';

const initialState = {
  productDetails: null,
  productList: [],
  message: null,
  isError: false,
  isLoading: false,
  cartList: [],
  orderList: [],
  categoryList: [],
  page: 1,
  total: 1,
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

    case CATEGORY_LIST:
      return {
        ...state,
        categoryList: payload.categoryList,
        isError: false,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: [...state.productList, ...payload.productList?.products],
        page: state.page + 1,
        total: payload.productList?.total,
        message: payload.message,
        isError: false,
      };

    case ADD_TO_CART:
      const existingProductIndex = state.cartList.findIndex(
        item => item.id === payload.product.id,
      );

      let cartData;
      if (existingProductIndex !== -1) {
        // Update the quantity of the existing product
        cartData = state.cartList.map((item, index) =>
          index === existingProductIndex
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      } else {
        // Add the new product to the cart
        const productData = {...payload.product, quantity: 1};
        cartData = [...state.cartList, productData];
      }
      return {
        ...state,
        cartList: cartData,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter(item => item.id != payload.id),
      };

    case ADD_QUANTITY:
      return {
        ...state,
        cartList: state.cartList.map((item, index) =>
          item.id === payload.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartList: state.cartList.map((item, index) =>
          item.id === payload.id
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
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
