/**
 * @format
 */

import {AppRegistry, LogBox, Text, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const ignoreWarns = [
  'currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput',
  'ViewPropTypes will be removed from React Native, along with all other PropTypes.',
  'Animated: `useNativeDriver`',
  'EventEmitter.removeListener',
  '[fuego-swr-keys-from-collection-path]',
  'Setting a timer for a long period of time',
  'ViewPropTypes will be removed from React Native',
  'AsyncStorage has been extracted from react-native',
  "exported from 'deprecated-react-native-prop-types'.",
  'Non-serializable values were found in the navigation state.',
  'VirtualizedLists should never be nested inside plain ScrollViews',
  'new NativeEventEmitter',
];

LogBox.ignoreLogs(ignoreWarns);

AppRegistry.registerComponent(appName, () => App);

// Override Text scaling
if (Text.defaultProps) {
  Text.defaultProps.allowFontScaling = false;
} else {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

// Override Text scaling in input fields
if (TextInput.defaultProps) {
  TextInput.defaultProps.allowFontScaling = false;
} else {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
