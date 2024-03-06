import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SettingDataProps} from '../Data/SettingData';
import {useTranslation} from 'react-i18next';
import {ImageProps} from 'react-native';

type SettingProps = {
  text: string;
  image: ImageProps;
  subText: string | undefined;
  onpress: (text: string) => void;
};

const SettingOption = ({text, image, subText, onpress}: SettingProps) => {
  const {t, i18n} = useTranslation();

  return (
    <TouchableOpacity
      onPress={() => onpress(text)}
      style={{
        height: 56,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1 / 0.5,
            // justifyContent: 'space-around',
          }}>
          <View
            style={{
              borderRadius: 100,
              height: 32,
              width: 32,
              backgroundColor: '#F8FAFB',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image style={{width: 20, height: 20}} source={image} />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 12,
            }}>
            <Text
              style={{
                fontFamily: 'Inter-Regular',
                fontSize: 14,
                color: 'black',
              }}>
              {t(text)}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          //   alignItems : 'center'
        }}>
        <Text
          style={{color: '#666D80', fontFamily: 'Inter-regular', fontSize: 12}}>
          {t(subText ?? '')}
        </Text>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../assets/Icons/chevron-right.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SettingOption;

const styles = StyleSheet.create({});
