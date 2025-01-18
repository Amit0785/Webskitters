import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import React from 'react';
import {COLORS, WIDTH, FONTSIZE} from './Themes';
import ErrorBoundary from 'react-native-error-boundary';

const CustomFallback = props => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text style={{...styles.textStyle1}}>Something happened!</Text>
    <Text style={{...styles.textStyle1}}>{props.error.toString()}</Text>
  </View>
);

const SafeView = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        backgroundColor={COLORS.statusbarColor}
        barStyle={'light-content'}
      />

      <ErrorBoundary FallbackComponent={CustomFallback}>
        <View style={[styles.view, style]}>{children}</View>
      </ErrorBoundary>
    </SafeAreaView>
  );
};

export default SafeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.placeholderColor2,
    alignItems: 'center',
  },
  view: {
    height: '100%',
    width: '100%',
    paddingHorizontal: WIDTH * 0.04,
  },

  textStyle1: {
    marginTop: 5,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONTSIZE.MEDIUM,
    alignSelf: 'center',
  },
});
