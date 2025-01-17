import {getApiCall, postApiCall, commonGetApiCall} from './Network';

//Auth API's
export const loginApi = data => postApiCall(`athlete/login`, data); //Login API
