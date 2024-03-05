import {ImageProps, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StockName from './StockName';

import { LineChart} from 'react-native-gifted-charts'
const data=[ {value:50}, {value:-80}, {value:100}, {value:10} ,{value:50}, {value:-80}, {value:100}, {value:10}]

type StockListProps = {
  stockName: string;
  logo: ImageProps;
  companyName: string;
  price : number
  persentage : number
  data : {value : number}[]
};

const StockList = ({stockName, logo, companyName , price , persentage , data}: StockListProps) => {
  return (
    <TouchableOpacity style={{}} onPress={()=> console.log(companyName)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems : 'flex-start'
        }}>
        <View style={{flex: 1 / 2}}>
          <View style={{flex: 1}}>
            <StockName image={logo} compamyName= {companyName} stockName={stockName} />
          </View>
        </View>
        <View style={{flex: 1 / 1.5}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            //   backgroundColor: 'black',
              justifyContent: 'center',
            }}>
        <View style={{ alignItems : 'center' , justifyContent : 'center', paddingHorizontal : 20 , width : '100%' , height : '100%'}}>
          <LineChart
              initialSpacing={10}
              data={data}
              hideDataPoints
              thickness={1.5}
              hideRules
              hideYAxisText
              hideAxesAndRules
              showXAxisIndices = {false}
              showYAxisIndices = {false}
              color = {persentage < 0 ? 'red': 'green'}
              spacing={10}
            //   curved = {true}
            //   adjustToWidth = {true}
            //   maxValue={80}
              height={20}
            //   width={50}
            
          />
      </View>
            
          </View>
        </View>
        <View style={{flex: 1 / 3}}>
          <View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: 'Inter-Bold',
                }}>
                ${price}
              </Text>
              <Text
                style={{
                  color: (persentage < 0) ? 'red' : 'green',
                  fontSize: 12,
                  fontFamily: 'Inter-SemiBold',
                }}>
                 {persentage > 0 ? '+' : ''}{persentage}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StockList;

const styles = StyleSheet.create({});
