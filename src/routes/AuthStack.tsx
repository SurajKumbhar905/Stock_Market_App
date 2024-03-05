import {View, Text, Image} from 'react-native';
import React, {Children} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import Signup from '../screens/Signup';
import SignIn from '../screens/SignIn';
import {DefaultNavigationBar} from '../components/NavigationBar';
import PhoneNumberVerification from '../screens/PhoneNumberVerification';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import SetupScreen from '../screens/SetupScreen';



export type AuthParamList = {
  OnboardingScreen: undefined;
  Signup: undefined;
  SignIn: undefined;
  PhoneNumberVerification : undefined;
  OTPVerificationScreen : undefined
  SetupScreen : undefined
};


const Stack = createNativeStackNavigator<AuthParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        // headerBackVisible : false
      }}>
      <Stack.Screen
        name="OnboardingScreen"
        options={{
          headerTitle: props => (
            <DefaultNavigationBar
              {...props}
              showBackButton={true}
              showTitle={true}
            />
          ),
        }}
        component={OnboardingScreen}></Stack.Screen>
      <Stack.Screen
        name="Signup"
        options={{
         
          // headerTransparent : true,
          headerTitle: props => (
            <DefaultNavigationBar
              {...props}
              showBackButton={true}
              showTitle={true}
            />
          ),
        }}
        component={Signup}></Stack.Screen>
      <Stack.Screen name="SignIn" component={SignIn}
      options={{
        headerBackVisible : false,
        headerTransparent : true,
        headerTitle: props => (
          <DefaultNavigationBar
            {...props}
            showBackButton={false}
            showTitle={false}
          />
        ),
      }}
      ></Stack.Screen>

      <Stack.Screen name='PhoneNumberVerification' component={PhoneNumberVerification}
       options={{
        headerBackVisible : false,
        headerTitle: props => (
          <DefaultNavigationBar
            {...props}
            showBackButton={true}
            showTitle={false}
          />
        ),
      }}
      ></Stack.Screen>
     <Stack.Screen name= 'OTPVerificationScreen' component={OTPVerificationScreen}
     options={{
      headerBackVisible : false,
      headerTitle: props => (
        <DefaultNavigationBar
          {...props}
          showBackButton={true}
          showTitle={false}
        />
      ),
    }}
     ></Stack.Screen>
     <Stack.Screen name='SetupScreen' component={SetupScreen}
     options={{
      headerBackVisible : false,
      gestureEnabled : false,
      headerTitle: props => (
        <DefaultNavigationBar
          {...props}
          showBackButton={false}
          showTitle={false}
        />
      ),
    }}
     ></Stack.Screen>
      
    </Stack.Navigator>
  );
};

export default AuthStack;
