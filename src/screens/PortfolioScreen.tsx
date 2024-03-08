import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PortfolioValue from '../components/PortfolioValue';
import DetailChart from '../components/DetailChart';
import {StockDataBase} from '../Data/StockDataBase';
import StockList from '../components/StockList';

const PortfolioScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 16}}>
      <FlatList
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator = {false}
        ListHeaderComponent={
          <View style = {{flex: 1 , marginBottom : 18}}>
            <PortfolioValue />
            <View style={{marginTop: 30}}>
              <DetailChart />
            </View>
            <View style = {{marginTop : 40}}>
              <Text style = {{color : 'black' , fontSize : 18 , fontFamily : 'Inter-SemiBold'}}>Stocks</Text>
            </View>
          </View>
        }
        data={StockDataBase}
        renderItem={({index, item}) => {
          return (
            <StockList
              logo={item.logo}
              stockName={item.stockName}
              companyName={item.companyName}
              price={item.price}
              persentage={item.persentage}
              data={item.data}
            />
          );
        }}
      />
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({});
