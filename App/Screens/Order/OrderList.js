import {View, StyleSheet, Text, Platform, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SafeView from '../../Common/SafeView';
import {Header} from '../../Components/Header';
import {COLORS, FONTSIZE, HEIGHT, WIDTH} from '../../Common/Themes';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {AppButton1} from '../../Components/AppButtons';
import NoData from '../../Components/NoData';

const OrderList = props => {
  const dispatch = useDispatch();
  const {cartList} = useSelector(state => state.Products);
  return (
    <SafeView>
      <Header
        title={'My Order'}
        navigation={props.navigation}
        showCart={false}
      />
    </SafeView>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
