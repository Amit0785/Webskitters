import React from 'react';
import {View, Text, Modal, Image, Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../Common/Themes';
import Images from '../Common/Images';

const {width, height} = Dimensions.get('window');
export default () => {
  return (
    <>
      <Modal visible={true} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}>
          <View
            style={{
              alignSelf: 'center',
              height: height * 0.6,
              backgroundColor: '#fff',
              width: width * 0.8,
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={Images.NoWifi}
                style={{width: null, height: null, flex: 1}}
              />
            </View>
            <View style={styles.bottomBox}>
              <Text style={styles.snap}>Oow Snap!</Text>
              <Text style={styles.connection}>
                Your Internet Connection is broken
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  bottomBox: {
    backgroundColor: COLORS.red2,
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    height: 160,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snap: {
    color: '#fff',
    fontSize: FONTSIZE.BIG,
    fontWeight: 'bold',
  },
  connection: {
    color: '#fff',
    fontSize: FONTSIZE.SMALLER,
  },
  imageContainer: {
    width: width * 0.4,
    height: height * 0.4,
    //marginTop: height * 0.01,
    alignSelf: 'center',
  },
  errorContainer: {
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#FF0000',
  },
  errorText: {
    color: COLORS.red2,
    fontSize: 20,
    textAlign: 'center',
  },
});
