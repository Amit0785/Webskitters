import {BASE_URL} from './Keyword';
import {getApiCall, postApiCall, commonGetApiCall} from './Network';
import Toast from 'react-native-simple-toast';
//Auth API's

export const fetchLogin = values => {
  return axios
    .post(BASE_URL + 'auth/login', JSON.stringify(values))
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Toast.show(`Login failed: ${error.message}`);
    });
};

export const fetchProductList = (page, limit) => {
  return axios
    .get(BASE_URL + `products?limit=${limit}&skip=${(page - 1) * limit}`, {})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Toast.show(`Product List Failed: ${error.message}`);
    });
};

export const fetchCategoryList = () => {
  return axios
    .get(BASE_URL + `products/category-list`, {})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Toast.show(`Category List Failed: ${error.message}`);
    });
};
