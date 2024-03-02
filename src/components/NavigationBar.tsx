import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';


const navigation = useNavigation();

export const HomeScreenNavigation = ({
  children,
  showBackButton,
}: {
  children: React.ReactNode;
  showBackButton: boolean;
}) => {
  console.log(children);

  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Image
        style={{width: 128, height: 27, resizeMode: 'center'}}
        source={require('../../assets/Images/logo.png')}
      />
      {showBackButton && (
        <View>
          <Text>Suraj</Text>
        </View>
      )}
      <Image
        style={{width: 128, height: 27, resizeMode: 'center'}}
        source={require('../../assets/Icons/Alert.png')}
      />
    </View>
  );
};

export const DefaultNavigationBar = ({
  children,
  showBackButton,
  showTitle,
}: {
  children: React.ReactNode;
  showBackButton: boolean;
  showTitle: boolean;
}) => {
  return (
    <>
      <View
        style={{
          marginLeft: -20,
          flex: 1,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}>
        {showTitle && (
          <Text
            style={{fontSize: 18, fontFamily: 'Inter-Bold', color: '#000000'}}>
            {children}
          </Text>
        )}
        {showBackButton && navigation.canGoBack() && (
          <TouchableOpacity
            onPress={ ()=> navigation.goBack()}
            style={{
              position: 'absolute',
              left: 0,
              width: 40,
              height: 40,
              backgroundColor: 'white',
              marginLeft: 25,
              borderRadius: 12,
              borderWidth : 1,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor : '#EDF2F7',
              
            }}>
            <Image
              style={{width: 24, height: 24, resizeMode: 'center'}}
              source={require('../../assets/Icons/chevron-left.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
