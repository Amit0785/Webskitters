import styles from './styles';
import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTSIZE, COLORS, HEIGHT, WIDTH} from '../Common/Themes';
import Images from '../Common/Images';

const AppTextInput1 = ({
  value,
  onChangeText,
  placeholder,
  style,
  InputLeftImage,
  errorMessage,
  showError,
  ...otherProps
}) => {
  return (
    <>
      <View style={[styles.division, style]}>
        <View style={styles.imgBox}>
          <Image
            source={InputLeftImage}
            style={{
              height: 20,
              width: 20,
              tintColor: '#C6C6C6',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{...styles.input, flex: 1, justifyContent: 'center'}}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            autoCorrect={false}
            placeholderTextColor={COLORS.placeholderColor}
            style={styles.input}
            {...otherProps}
          />
        </View>
      </View>
      {errorMessage && showError && <ErrorMessage text={errorMessage} />}
    </>
  );
};

const AppTextInput2 = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  setSecureTextEntry,
  style,
  errorMessage,
  showError,
  ...otherProps
}) => {
  return (
    <>
      <View style={[styles.division, style]}>
        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={styles.imgBox}>
          <Image
            source={secureTextEntry ? Images.Lock : Images.Lock2}
            style={{
              height: 20,
              width: 20,
              tintColor: '#C6C6C6',
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{...styles.input, justifyContent: 'center'}}>
          <TextInput
            maxLength={12}
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            placeholderTextColor={COLORS.placeholderColor}
            style={styles.input}
            {...otherProps}
          />
        </View>
      </View>
      {errorMessage && showError && <ErrorMessage text={errorMessage} />}
    </>
  );
};

const ErrorMessage = ({text}) => {
  return (
    <View>
      <Text style={styles.errorTextStyle}>{text}</Text>
    </View>
  );
};

export {AppTextInput1, ErrorMessage};
