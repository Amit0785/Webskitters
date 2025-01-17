import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const TextInputComponent1 = () => {
  return (
    <View>
      <Text>TextInputComponent</Text>
    </View>
  );
};

const ErrorMessage = ({text}) => {
  return (
    <View>
      <Text style={styles.errorTextStyle}>{text}</Text>
    </View>
  );
};

export {TextInputComponent1, ErrorMessage};
