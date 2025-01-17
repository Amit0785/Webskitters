import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './App/Redux/Store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>

        </NavigationContainer> */}
      <View>
        <Text>App</Text>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
