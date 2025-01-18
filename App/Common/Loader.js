import React from 'react';
import {View, Text, Modal, Image, ActivityIndicator} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import Images from './Images';
import {COLORS, WIDTH} from './Themes';

const Loader = ({visible}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        <View
          style={{
            height: 70,
            backgroundColor: '#fff',
            width: WIDTH * 0.5,
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{marginHorizontal: 10, fontSize: 18, color: '#000'}}>
            Loading
          </Text>

          {/* <ActivityIndicator
            color="#000"
            size={30}
            style={{marginLeft: -50, alignSelf: 'center'}}
          /> */}

          <DotIndicator
            count={3}
            color="#000"
            size={5}
            animationDuration={800}
            style={{marginLeft: -50, alignSelf: 'center'}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
