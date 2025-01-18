import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTSIZE, HEIGHT} from '../Common/Themes';

const NoData = ({noData}) => {
  return (
    <View
      style={{
        width: '100%',
        // height: 100,
        marginTop: HEIGHT * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.textStyle}>{noData}</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.black,

    fontWeight: '400',
    fontSize: FONTSIZE.MEDIUM,
  },
});
