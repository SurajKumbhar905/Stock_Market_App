import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StockDataBase, StockDataBaseProps} from '../Data/StockDataBase';
import StockName from './StockName';
import {LineChart} from 'react-native-gifted-charts';

const TopGainer = () => {
  function sortStocksByPercentageTop5(
    data: StockDataBaseProps[],
  ): StockDataBaseProps[] {
    // Sort the array based on the percentage property
    const sortedData = data.slice().sort((a, b) => b.persentage - a.persentage);

    // Get the top 5 elements
    const top5 = sortedData.slice(0, 5);

    return top5;
  }

  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingVertical: 0,
      }}>
      <View style={{marginBottom: 25}}>
        <Text
          style={{color: 'black', fontFamily: 'Inter-SemiBold', fontSize: 18}}>
          Top Gainer
        </Text>
      </View>
      <View style={{height: 139, marginBottom: 25}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortStocksByPercentageTop5(StockDataBase)}
          renderItem={({item, index, separators}) => (
            <View
              key={index}
              style={{
                height: '100%',
                width: 212,
                borderWidth: 1,
                borderRadius: 6,
                borderColor: '#EAEAEA',
              }}>
              <View
                style={{
                  flex: 1 / 2,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}>
                <StockName
                  image={item.logo}
                  compamyName={item.companyName}
                  stockName={item.stockName}
                />
              </View>
              <View
                style={{
                  flex: 1 / 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flex: 1 / 1.5}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'Inter-SemiBold',
                      fontSize: 12,
                      color: item.persentage < 0 ? 'red' : 'green',
                    }}>
                    {item.persentage > 0 ? '+' : ''}{item.persentage}%
                  </Text>
                </View>
                <View style={{ flex: 1 , alignItems : 'center'}}>
                  <View
                    style={{
                      marginTop: 50,
                      width: '100%',
                      height: '100%',
                      alignItems : 'center',
                      flex : 1,
                      justifyContent : 'center'
                    }}>
                    <LineChart
                    backgroundColor={'red'}
                      initialSpacing={10}
                      data={item.data}
                      hideDataPoints
                      thickness={1.5}
                      hideRules
                      hideYAxisText
                      hideAxesAndRules
                      showXAxisIndices={false}
                      showYAxisIndices={false}
                      color={item.persentage < 0 ? 'red' : 'green'}
                      spacing={10}
                      areaChart
                      startFillColor= {'green'}
                      startOpacity={0.1}
                      endFillColor="rgb(203, 241, 250)"
                      endOpacity={0}
                      isAnimated = {true}
                      animationDuration={400}
                      // lineGradient = {true}
                      //   curved = {true}
                      //   adjustToWidth = {true}
                      //   maxValue={80}
                      height={50}
                  
                      //   width={50}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: 16,
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TopGainer;

const styles = StyleSheet.create({});
