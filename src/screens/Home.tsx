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
import { useTranslation } from 'react-i18next';



const Home = () => {

  const { t, i18n } = useTranslation();

  

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
                paddingHorizontal: 16
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Inter-SemiBold',
                  fontSize: 18,
                }}>
                {t('WishList')}
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
        style={{paddingTop: 18 , paddingHorizontal : 16}}
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
