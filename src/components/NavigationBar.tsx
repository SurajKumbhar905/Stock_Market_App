import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const navigation = useNavigation();
let deviceWidth = Dimensions.get('window').width;
const {t, i18n} = useTranslation();

export const HomeScreenNavigation = ({
  children,
  showBackButton,
  showTitle,
}: {
  children: React.ReactNode;
  showBackButton: boolean;
  showTitle: boolean;
}) => {
  return (
    <View
      style={{
        marginLeft: -20,
        flex: 1,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 5,
        width: deviceWidth,
        flexDirection: 'row',
        paddingHorizontal: 16,

      }}>
      <Image
        style={{width: deviceWidth / 3, height: 27 , resizeMode : 'contain'}}
        source={require('../../assets/Images/logo.png')}
      />
      <TouchableOpacity style={{}}>
        <Image
          style={{width: 22, height: 20}}
          source={require('../../assets/Icons/Alert.png')}
        />
        <View
          style={{
            width: 8,
            height: 8,
            backgroundColor: '#FE5050',
            position: 'absolute',
            right: 1,
            borderRadius: 4,
          }}></View>
      </TouchableOpacity>
    </View>
  );
};

export const DefaultNavigationBar = ({
  children,
  showBackButton,
  showTitle,
}: {
  children: string;
  showBackButton: boolean;
  showTitle: boolean;
}) => {
  return (
    <View
      style={{
        marginLeft: -20,
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        width: deviceWidth,
        flexDirection: 'row',
      }}>
      {showTitle && (
        <Text
          style={{fontSize: 18, fontFamily: 'Inter-Bold', color: '#000000'}}>
          {t(children)}
        </Text>
      )}
      {showBackButton && navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
            width: 40,
            height: 40,
            backgroundColor: 'white',
            marginLeft: 25,
            borderRadius: 12,
            borderWidth: 1,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#EDF2F7',
          }}>
          <Image
            style={{width: 24, height: 24, resizeMode: 'center'}}
            source={require('../../assets/Icons/chevron-left.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
