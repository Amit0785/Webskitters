import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTSIZE, HEIGHT, WIDTH} from '../Common/Themes';
import {AppButton1} from './AppButtons';
import Images from '../Common/Images';
import {useDispatch} from 'react-redux';
import {addToCart} from '../Redux/Actions/Action';
import routes from '../Navigation/routes';

const ProductComponent = ({item, navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.boxStyle}>
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
          Price : <Text style={styles.textStyle}>{item.price}</Text>
        </Text>
        <Text style={styles.subHeaderTextStyle}>
          Brand : <Text style={styles.textStyle}>{item.brand}</Text>
        </Text>
        <Text style={styles.subHeaderTextStyle}>
          Rating : <Text style={styles.textStyle}>{item.rating}</Text>
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <AppButton1
            onPress={() => {
              navigation.navigate(routes.ProductDetails, {itemId: item.id});
            }}
            text={'Details'}
            textStyle={{fontSize: FONTSIZE.SMALL}}
            style={styles.buttonStyle}
          />
          <AppButton1
            onPress={() => {
              dispatch(addToCart(item));
            }}
            text={'Add to Cart'}
            textStyle={{fontSize: FONTSIZE.SMALL}}
            style={styles.buttonStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONTSIZE.MEDIUM,
  },
  boxStyle: {
    width: '100%',
    marginBottom: HEIGHT * 0.02,
    backgroundColor: COLORS.white,
    borderRadius: 10,
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
  },
});
