import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PortfolioValue = () => {
  return (
    <View
      style={{
        marginTop: 25,
        justifyContent: 'space-between',
      }}>
      <View style={{marginTop : 0,justifyContent: 'space-between'}}>
        <Text style={{color: '#A0AEC0'}}>Portfolio value</Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text
            style={{fontSize: 32, fontFamily: 'Inter-Bold', color: 'black'}}>
            $13,240.11
          </Text>
          <Text
            style={{
              marginHorizontal: 6,
              fontSize: 14,
              fontFamily: 'Inter-SemiBold',
              color: 'green',
            }}>
            1.74%
          </Text>
          <View
            style={{
              height: 16,
              width: 16,
              backgroundColor: '#E3F4E9',
              borderRadius: 100,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'green',
            }}>
            <Image
              style={{resizeMode: 'contain', height: 8, width: 8}}
              source={require('../../assets/Icons/ArrowUp.png')}
            />
          </View>
        </View>
      </View>
      <View
        style={{
         marginTop : 20,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            width: 165,
            height: 50,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
            borderColor: '#DFE1E7',
            borderWidth: 1,
            // justifyContent : 'space-around'
          }}>
          <View
            style={{
              height: 32,
              width: 32,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#DFE1E7',
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../assets/Icons/ArrowUp.png')}
            />
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                color: '#818898',
              }}>
              Gain
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Inter-SemiBold',
                color: 'black',
              }}>
              $234.11
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 165,
            height: 50,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
            borderColor: '#DFE1E7',
            borderWidth: 1,
            // justifyContent : 'space-around'
          }}>
          <View
            style={{
              height: 32,
              width: 32,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#DFE1E7',
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../assets/Icons/arrowDown.png')}
            />
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter-Regular',
                color: '#818898',
              }}>
              Loss
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Inter-SemiBold',
                color: 'black',
              }}>
              $34.11
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PortfolioValue;

const styles = StyleSheet.create({});
