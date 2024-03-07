import {
  ActivityIndicator,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppAuthenticationContext} from '../Context/AppAuthenticationContext';
import TouchID, {AuthenticationError} from 'react-native-touch-id';
import {SafeAreaView} from 'react-native-safe-area-context';
import OtpView from '../components/OtpView';
import {PrimaryButton} from '../components/Button';

const PinScreen = () => {
  const {isPinMatch, setisPinMatch} = useContext(AppAuthenticationContext);
  const [isLoading, setisLoading] = useState(false);
  const [isAutofocus, setisAutofocus] = useState(false);
  const value = ['', '', '', '', '', ''];
  useEffect(() => {
    userBiomatricAuthHandle();
  }, []);

  const userBiomatricAuthHandle = () => {
    const optionalConfigObject = {
      title: 'Verify biometric', // Android
      imageColor: '#3E52C1', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed ', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };

    TouchID.authenticate('Scan your biomatric ID', optionalConfigObject)
      .then((success: any) => {
        console.log('authentication is susecc');
        setisLoading(true);
        setisPinMatch(true);
      })
      .catch((error: AuthenticationError) => {
        if (error.details == 'cancelled') {
          console.log(
            'authentication is fai',
            error.code,
            ' ',
            error.message,
            ' ',
            error.details,
          );
          setisAutofocus(true);
        }
      });
  };

  const handleOtpChange = (otpValue: Array<string>) => {
    otpValue.map((item, index) => {
      if (item === '') {
        console.log(index, 'suraj', item);
        value[index] = '';
      }
      if (item) {
        value[index] = item;
      }
      console.log(value);
    });
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <ActivityIndicator size="large" color="#3E52C1" />
        <Text
          style={{
            fontSize: 16,
            color: '#3E52C1',
            fontFamily: 'Inter-SemiBold',
          }}>
          Getting Ready...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View
        style={{
          flex: 1 / 2.5,
          //   backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 55,
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'blue',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: 'black',
              marginBottom: 10,
              fontSize: 20,
              fontFamily: 'Inter-Bold',
            }}>
            Enter Pin
          </Text>
          <Text
            style={{
              color: '#666D80',
              marginBottom: 30,
              fontSize: 14,
              fontFamily: 'Inter-Regular',
            }}>
            Adding a pin number will make your investment secure {isAutofocus ? 'dhdh' : 'hdhdh'}
          </Text>
          <OtpView
            disabled={false}
            length={6}
            value={value}
            onChange={handleOtpChange}
            isAutoFocus={isAutofocus}
          />
          <TouchableOpacity style={{marginTop: 20}} onPress={()=>{
            console.log('click')
            setisAutofocus(true)}}>
            <Text
              style={{
                color: '#3E52C1',
                fontSize: 14,
                fontFamily: 'Inter-SemiBold',
              }}>
              Forgot Pin?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          //   backgroundColor: 'red',
          flex: 1 / 1.8,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <PrimaryButton
          height={55}
          title="Confirm"
          width={'90%'}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({});
