import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS, FONTSIZE} from '../Common/Themes';

const RenderFooter = ({dataList, fetchData}) => {
  return (
    //Footer View with Load More button
    <View
      style={{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        //On Click of button calling loadMoreData function to load more data
        style={{flexDirection: 'row'}}>
        {dataList.length != 0 && (
          <Text
            style={{
              color: COLORS.borderColor,
              fontSize: FONTSIZE.SMALLER,
              textAlign: 'center',
            }}>
            {fetchData ? `Loading...` : null}
          </Text>
        )}
        {fetchData ? (
          <ActivityIndicator
            color={COLORS.borderColor}
            style={{marginLeft: 8}}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default RenderFooter;
