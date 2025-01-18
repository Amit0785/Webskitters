import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SafeView from '../../Common/SafeView';
import {AppButton1} from '../../Components/AppButtons';
import {AppTextInput1, AppTextInput2} from '../../Components/AppTextInput';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Toast from 'react-native-simple-toast';
import Loader from '../../Common/Loader';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {HEIGHT, WIDTH} from '../../Common/Themes';
import {loginAction} from '../../Redux/Actions/Auth';

const Login = props => {
  const dispatch = useDispatch();
  const {message, isError, isLoading} = useSelector(state => state.Auth);
  const [showPassword, setShowPassword] = useState(true);
  const initialValues = {
    email: '',
    password: '',
    expiresInMins: 120,
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email address.')
      .required('Please enter email address.'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one digit')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      )
      .required('Password is required'),
  });

  return (
    <SafeView>
      {/* <Loader visible={loading} /> */}
      <KeyboardAvoidingScrollView
        bounces={false}
        //behavior="padding"
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            marginBottom: HEIGHT * 0.1,
            marginTop: HEIGHT * 0.07,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={async values => {
              console.log(values);
              dispatch(loginAction(values, props.navigation));
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <AppTextInput1
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder={'Email'}
                  onBlur={handleBlur('email')}
                  InputLeftImage={Images.Email}
                  style={{marginTop: HEIGHT * 0.03, width: WIDTH * 0.83}}
                  errorMessage={errors.email}
                  showError={touched.email && errors.email}
                />
                <AppTextInput2
                  value={values.password}
                  showError={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  style={{marginTop: HEIGHT * 0.03, width: WIDTH * 0.83}}
                  placeholder={'Password'}
                  secureTextEntry={showPassword}
                  setSecureTextEntry={setShowPassword}
                  errorMessage={errors.password}
                />

                <AppButton1
                  loading={isLoading}
                  onPress={handleSubmit}
                  text={'LOGIN'}
                  style={styles.appButtonStyle}
                />
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeView>
  );
};

export default Login;

const styles = StyleSheet.create({
  appButtonStyle: {marginTop: HEIGHT * 0.02, width: WIDTH * 0.83, height: 60},
});
