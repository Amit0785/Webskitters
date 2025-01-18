import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import Login from '../Screens/Auth/Login';
import ProductList from '../Screens/Products/ProductList';
import ProductDetails from '../Screens/Products/ProductDetails';
import CartList from '../Screens/Cart/CartList';
import OrderList from '../Screens/Order/OrderList';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.Login}>
      <Stack.Screen name={routes.Login} component={Login} />
      <Stack.Screen name={routes.ProductList} component={ProductList} />
      <Stack.Screen name={routes.ProductDetails} component={ProductDetails} />
      <Stack.Screen name={routes.CartList} component={CartList} />
      <Stack.Screen name={routes.OrderList} component={OrderList} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
