import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import Login from '../Screens/Auth/Login';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.Login}>
      <Stack.Screen name={routes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
