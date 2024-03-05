import {  ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TopGainer from '../components/TopGainer';

const Home = () => {

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo",
      );
      const json = await response.json();
      if ("Time Series (5min)" in json) {
        const timeSeriesDaily = json["Time Series (5min)"];

        // Iterate over the properties of timeSeriesDaily
        for (const date in timeSeriesDaily) {
            if (timeSeriesDaily.hasOwnProperty(date)) {
                const dailyData = timeSeriesDaily[date];
                console.log("Date:", date);
                console.log("Daily Data:", dailyData);
                // You can now access properties of dailyData, such as "open", "high", "low", "close", etc.
            }
        }
    } else {
        throw new Error('Time Series (Daily) not found in API response');
    }
      
      if ("Meta Data" in json) {
        const metaData = json["Meta Data"];
        console.log("Metadata:", metaData);

    } else {
        throw new Error('Meta Data not found in API response');
    }
      // console.log(JSON.stringify(json, null, 2)) ;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMoviesFromApiAsync()
  }, [])
  

  return (
    
    <View style = {{flex : 1 , backgroundColor : 'white'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView>
        <TopGainer/>  
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})