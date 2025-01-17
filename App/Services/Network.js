import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {TOKEN, BASE_URL} from './Keywords';

//....for Get method Api......
export async function getApiCall(url, data, params) {
  // console.log("=========",url,data,params)
  let AccessToken = await AsyncStorage.getItem(TOKEN);
  console.log('Get Api===>', `${BASE_URL}${url}`);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${AccessToken}`,
  };
  const response = axios.get(`${BASE_URL}${url}`, {data, params, headers});
  return response;
}

export async function commonGetApiCall(endPoint, data, params) {
  console.log('common api=====>', `${BASE_URL}${endPoint}`);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };
  const response = axios.get(`${BASE_URL}${endPoint}`, {data, params, headers});
  return response;
}

///......for Post method Api.....
export const postApiCall = async (url, data, params) => {
  let AccessToken = await AsyncStorage.getItem(TOKEN);

  console.log('Post Api===>', `${BASE_URL}${url}`);
  let headers = {
    'Content-Type': 'application/json',
    Authorization: AccessToken == null ? '' : `Bearer ${AccessToken}`,
  };
  const response = await axios.post(`${BASE_URL}${url}`, data, {
    params,
    headers,
  });
  return response;
};
