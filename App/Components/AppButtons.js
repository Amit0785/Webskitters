import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

const AppButton1 = ({onPress, text, style, loading, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[styles.customButton, style, {opacity: loading ? 0.4 : 1}]}
      activeOpacity={0.7}>
      {loading ? (
        <ActivityIndicator size="small" color={'#064681'} />
      ) : (
        <Text style={[styles.buttonText, {...textStyle}]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export {AppButton1};
