import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTSIZE, COLORS, HEIGHT, WIDTH} from '../Common/Themes';
import routes from '../Navigation/routes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const Header = props => {
  const {cartList} = useSelector(state => state.Products);

  return (
    <View style={styles.boxStyle}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.leftBackground}>
        <Ionicons
          name="arrow-back-sharp"
          size={25}
          color={COLORS.black}
          style={{marginRight: 10}}
        />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{props.title}</Text>
      {props.showCart ? (
        <TouchableOpacity
          onPress={() => props.navigation.navigate(routes.CartList)}
          style={styles.cartBackground}>
          <Ionicons
            name="cart-sharp"
            size={25}
            color={COLORS.black}
            style={{}}
          />
          {cartList.length > 0 && (
            <View style={styles.cartBadge}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: '400',
                  fontSize: FONTSIZE.MINI,
                }}>
                {cartList.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      ) : (
        <View style={styles.cartBackground} />
      )}
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: FONTSIZE.MEDIUM,
  },
  cartBackground: {
    //backgroundColor: COLORS.backgroundColor2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 1,
  },
  leftBackground: {
    width: 35,
    opacity: 1,
  },
  boxStyle: {
    width: '100%',
    //height: 50,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: HEIGHT * 0.01,
  },
  cartBadge: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.appColor,
    position: 'absolute',
    right: -5,
    top: -5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
