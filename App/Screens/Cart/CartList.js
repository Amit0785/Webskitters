import {View, StyleSheet, Text, Platform, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SafeView from '../../Common/SafeView';
import {Header} from '../../Components/Header';
import {COLORS, FONTSIZE, HEIGHT, WIDTH} from '../../Common/Themes';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {AppButton1} from '../../Components/AppButtons';
import NoData from '../../Components/NoData';
import {
  addQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../Redux/Actions/Action';
import routes from '../../Navigation/routes';
import _ from 'lodash';

const CartList = props => {
  const dispatch = useDispatch();
  const {cartList} = useSelector(state => state.Products);
  return (
    <SafeView>
      <Header
        title={'My Cart'}
        navigation={props.navigation}
        showCart={false}
      />
      {cartList.length == 0 ? (
        <NoData noData={'No product in the cart'} />
      ) : (
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
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            {cartList
              .filter(item => item.quantity != 0)
              .map(item => {
                return (
                  <View key={item.id} style={styles.boxStyle}>
                    <Image
                      source={{uri: item.thumbnail}}
                      style={{
                        width: WIDTH * 0.26,
                        height: HEIGHT * 0.1,
                        alignSelf: 'center',
                        resizeMode: 'cover',
                      }}
                    />
                    <View style={{width: WIDTH * 0.6}}>
                      <Text style={styles.headerTextStyle}>{item.title}</Text>
                      <Text style={styles.subHeaderTextStyle}>
                        Total Price :{' '}
                        <Text style={styles.textStyle}>
                          {_.round(item.quantity * item.price, 2).toFixed(2)}
                        </Text>
                      </Text>
                      <Text style={styles.subHeaderTextStyle}>
                        Brand :{' '}
                        <Text style={styles.textStyle}>{item.brand}</Text>
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          width: '70%',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{...styles.subHeaderTextStyle, marginTop: 0}}>
                          Quantity :{' '}
                          <Text style={styles.textStyle}>{item.quantity}</Text>
                        </Text>
                        <View
                          style={{
                            width: '40%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingHorizontal: 5,
                            borderColor: COLORS.darkgray,
                          }}>
                          <Text
                            onPress={() => {
                              dispatch(addQuantity(item.id));
                            }}
                            style={styles.symbolTextStyle}>
                            +
                          </Text>
                          <Text
                            onPress={() => {
                              dispatch(decreaseQuantity(item.id));
                            }}
                            style={styles.symbolTextStyle}>
                            -
                          </Text>
                        </View>
                      </View>
                      <AppButton1
                        onPress={() => {
                          dispatch(removeFromCart(item.id));
                        }}
                        text={'Remove'}
                        textStyle={{fontSize: FONTSIZE.SMALL}}
                        style={styles.buttonStyle}
                      />
                    </View>
                  </View>
                );
              })}
            <AppButton1
              onPress={() => {
                props.navigation.navigate(routes.OrderList);
              }}
              text={'Go to Order'}
              textStyle={{fontSize: FONTSIZE.SMALL}}
              style={{
                width: WIDTH * 0.5,
                height: 45,
                marginTop: HEIGHT * 0.02,
              }}
            />
          </View>
        </KeyboardAvoidingScrollView>
      )}
    </SafeView>
  );
};

export default CartList;

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: FONTSIZE.MEDIUM,
  },
  symbolTextStyle: {
    color: COLORS.black,
    fontWeight: '500',
    fontSize: FONTSIZE.LARGE,
  },
  boxStyle: {
    width: '100%',
    marginBottom: HEIGHT * 0.02,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 0.02,
    paddingVertical: HEIGHT * 0.02,
  },
  headerTextStyle: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: FONTSIZE.MEDIUM,
  },
  subHeaderTextStyle: {
    color: COLORS.black,
    fontWeight: '500',
    fontSize: FONTSIZE.SMALL,
  },
  textStyle: {
    color: COLORS.black,
    fontWeight: '400',
    fontSize: FONTSIZE.SMALL,
  },
  buttonStyle: {
    //width: WIDTH * 0.25,
    height: 45,
    paddingHorizontal: WIDTH * 0.03,
    alignSelf: 'flex-start',
  },
});
