import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import {PrimaryButton, SecondaryButton} from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { AuthParamList } from '../routes/AuthStack';
import Signup from './Signup';

type OnboardingScreenProps  = NativeStackScreenProps<AuthParamList , 'OnboardingScreen'>;

const OnboardingScreen = ({navigation}:OnboardingScreenProps) => {
  
  const width = Dimensions.get('window').width;

  const gotoSignUpScreen = () =>{
      navigation.replace('Signup')
  }

  const gotoSignInScreen = () =>{
    navigation.replace('SignIn')
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Image
        style={{width: 250, height: 320, resizeMode: 'cover'}}
        source={require('../../assets/Images/Banner1.png')}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Inter-Bold',
            textAlign: 'center',
            color: '#000000',
          }}>
          Stock trading suit
        </Text>
        <Text style={{width: 250, textAlign: 'center', color: '#666D80'}}>
          Streamline your investment decisions with expert guidance.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: width,
          paddingHorizontal: 20,
        }}>
        <SecondaryButton
          onPress={gotoSignInScreen}
          title={'SignIn'}
          width={160}
          height={44}
        />
        <PrimaryButton
          onPress={gotoSignUpScreen}
          title={'SignUp'}
          width={160}
          height={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
