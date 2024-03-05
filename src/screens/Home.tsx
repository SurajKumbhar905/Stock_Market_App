import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import TopGainer from '../components/TopGainer';
import StockList from '../components/StockList';
import {StockDataBase} from '../Data/StockDataBase';


const Home = () => {
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo',
      );
      const json = await response.json();
      if ('Time Series (5min)' in json) {
        const timeSeriesDaily = json['Time Series (5min)'];

        // Iterate over the properties of timeSeriesDaily
        for (const date in timeSeriesDaily) {
          if (timeSeriesDaily.hasOwnProperty(date)) {
            const dailyData = timeSeriesDaily[date];
            console.log('Date:', date);
            console.log('Daily Data:', dailyData);
            // You can now access properties of dailyData, such as "open", "high", "low", "close", etc.
          }
        }
      } else {
        throw new Error('Time Series (Daily) not found in API response');
      }

      if ('Meta Data' in json) {
        const metaData = json['Meta Data'];
        console.log('Metadata:', metaData);
      } else {
        throw new Error('Meta Data not found in API response');
      }
      // console.log(JSON.stringify(json, null, 2)) ;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // getMoviesFromApiAsync()
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 16}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator = {false}
        ListHeaderComponent={
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <TopGainer />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 25,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 18,
                }}>
                Wishlist
              </Text>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{resizeMode: 'center', width: 22, height: 22}}
                  source={require('../../assets/Icons/plus-circle.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
        data={StockDataBase}
        style={{paddingTop: 18}}
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
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
