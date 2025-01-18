import {View, FlatList, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NoData from '../../Components/NoData';
import ProductComponent from '../../Components/ProductComponent';
import {getProductList} from '../../Redux/Actions/Product';
import SafeView from '../../Common/SafeView';
import {Header} from '../../Components/Header';
import {HEIGHT} from '../../Common/Themes';
import Loader from '../../Common/Loader';
import RenderFooter from '../../Components/RenderFooter';
const ProductList = props => {
  const dispatch = useDispatch();
  const {productList, page, isLoading, total} = useSelector(
    state => state.Products,
  );
  const [fetchData, setFetchData] = useState(false);
  useEffect(() => {
    dispatch(getProductList(page, 25));
  }, []);
  const loadMore = () => {
    page >= total / 25
      ? setFetchData(false)
      : dispatch(getProductList(page, 25));
  };

  return (
    <SafeView>
      <Header
        title={'Product List'}
        navigation={props.navigation}
        showCart={true}
      />
      {productList.length == 0 ? (
        <NoData noData={'No Product List'} />
      ) : (
        <View
          style={{
            marginBottom: HEIGHT * 0.06,
            height: Platform.OS == 'ios' ? HEIGHT * 0.85 : HEIGHT * 0.93,
          }}>
          <FlatList
            data={productList}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            vertical={true}
            ListFooterComponent={() => {
              return (
                <RenderFooter dataList={productList} fetchData={fetchData} />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={loadMore}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => {
              return (
                <ProductComponent
                  key={item.id}
                  item={item}
                  navigation={props.navigation}
                />
              );
            }}
          />
        </View>
      )}
    </SafeView>
  );
};

export default ProductList;
