import {StatusBar, SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import store from './App/Redux/Store';
import {Provider} from 'react-redux';
import {COLORS} from './App/Common/Themes';
import StackNavigation from './App/Navigation/StackNavigation';
const App = () => {
  const [netStatus, setNet] = useState(true);
  useEffect(() => {
    //Checking live status of internet connection
    NetInfo.addEventListener(state => {
      setNet(state.isConnected);
    });
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
          <StatusBar
            backgroundColor={COLORS.statusbarColor}
            barStyle="light-content"
          />
          {!netStatus ? <NetworkError /> : null}
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
