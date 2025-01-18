import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import SafeView from '../../Common/SafeView';
import {AppButton1} from '../../Components/AppButtons';
import {AppTextInput1, AppTextInput2} from '../../Components/AppTextInput';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import Loader from '../../Common/Loader';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTSIZE, HEIGHT, WIDTH} from '../../Common/Themes';
import {loginAction} from '../../Redux/Actions/Auth';
import Images from '../../Common/Images';
import routes from '../../Navigation/routes';

const Login = props => {
  const dispatch = useDispatch();
  const {message, isError, isLoading} = useSelector(state => state.Auth);
  const [showPassword, setShowPassword] = useState(true);
  const initialValues = {
    username: '',
    password: '',
    expiresInMins: 120,
  };
  const validationSchema = yup.object({
    username: yup.string().required('Please enter user name.'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });
  return (
    <SafeView>
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
          <View style={[styles.textBoxStyle]}>
            <Text style={styles.headerTextStyle}>READY TO SIGN IN</Text>
            <Text style={styles.textStyle}>
              Enter your email number and password
            </Text>
          </View>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={async values => {
              console.log(values);
              dispatch(loginAction(values, props.navigation));
              //props.navigation.navigate(routes.ProductList);
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
                  value={values.username}
                  onChangeText={handleChange('username')}
                  placeholder={'Email'}
                  InputLeftImage={Images.Email}
                  style={{width: WIDTH * 0.83}}
                  errorMessage={errors.username}
                  showError={touched.username && errors.username}
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
  appButtonStyle: {marginTop: HEIGHT * 0.1, width: WIDTH * 0.83, height: 60},
  textBoxStyle: {
    alignSelf: 'center',
    marginVertical: HEIGHT * 0.07,
    // marginBottom: height * 0.1,
    alignItems: 'center',
  },
  headerTextStyle: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: FONTSIZE.EXTRALARGE,
  },
  textStyle: {
    marginTop: 5,
    color: COLORS.black,
    fontWeight: '400',
    fontSize: FONTSIZE.SMALL,
  },
});
