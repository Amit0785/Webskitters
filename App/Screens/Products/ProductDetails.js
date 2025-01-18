import {View, StyleSheet, Text, Platform, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SafeView from '../../Common/SafeView';
import {Header} from '../../Components/Header';
import {COLORS, FONTSIZE, HEIGHT, WIDTH} from '../../Common/Themes';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {AppButton1} from '../../Components/AppButtons';
import {addToCart} from '../../Redux/Actions/Action';

const ProductDetails = props => {
  const dispatch = useDispatch();
  const {productList} = useSelector(state => state.Products);

  const productData = productList.find(
    item => item.id == props.route.params.itemId,
  );

  console.log('===productData=====>', productData);
  return (
    <SafeView>
      <Header
        title={'Product Details'}
        navigation={props.navigation}
        showCart={true}
      />
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
          <Image
            source={{uri: productData.thumbnail}}
            style={{
              width: WIDTH * 0.8,
              height: HEIGHT * 0.3,
              alignSelf: 'center',
              resizeMode: 'contain',
            }}
          />
          <View style={{width: WIDTH * 0.9}}>
            <Text style={styles.headerTextStyle}>{productData.title}</Text>
            <Text style={styles.headerTextStyle}>#{productData.sku}</Text>
            <Text style={styles.subHeaderTextStyle}>
              Price : <Text style={styles.textStyle}>{productData.price}</Text>
            </Text>
            <Text style={styles.subHeaderTextStyle}>
              Brand : <Text style={styles.textStyle}>{productData.brand}</Text>
            </Text>
            <Text style={styles.subHeaderTextStyle}>
              Rating :{' '}
              <Text style={styles.textStyle}>{productData.rating}</Text>
            </Text>
            <Text style={styles.subHeaderTextStyle}>
              Description :{' '}
              <Text style={styles.textStyle}>{productData.description}</Text>
            </Text>

            <Text style={styles.subHeaderTextStyle}>
              Available :{' '}
              <Text
                style={{
                  ...styles.textStyle,
                  color:
                    productData.availabilityStatus == 'In Stock'
                      ? COLORS.green
                      : COLORS.red,
                }}>
                {productData.availabilityStatus}
              </Text>
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{...styles.subHeaderTextStyle, marginTop: 0}}>
                Tags :
              </Text>
              {productData.tags.map((item, index) => {
                return (
                  <Text
                    key={index}
                    style={{...styles.textStyle, marginLeft: 5}}>
                    {item}
                  </Text>
                );
              })}
            </View>
            <Text style={styles.subHeaderTextStyle}>
              Return Policy :{' '}
              <Text style={styles.textStyle}>{productData.returnPolicy}</Text>
            </Text>
            <AppButton1
              onPress={() => {
                dispatch(addToCart(productData));
              }}
              text={'Add to Cart'}
              textStyle={{fontSize: FONTSIZE.SMALL}}
              style={styles.buttonStyle}
            />
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONTSIZE.MEDIUM,
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
    marginTop: 5,
  },
  textStyle: {
    color: COLORS.black,
    fontWeight: '400',
    fontSize: FONTSIZE.SMALL,
  },
  buttonStyle: {
    width: WIDTH * 0.55,
    height: 45,
    alignSelf: 'center',
    marginTop: HEIGHT * 0.03,
  },
});
