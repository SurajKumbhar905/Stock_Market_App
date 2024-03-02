import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {PrimaryButton} from '../components/Button';
import OtpView from '../components/OtpView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '../routes/AuthStack';
import {CommonActions} from '@react-navigation/native';

type OTPScreenProps = NativeStackScreenProps<
  AuthParamList,
  'OTPVerificationScreen'
>;

const OTPVerificationScreen = ({navigation}: OTPScreenProps) => {
  const value = ['', '', '', '', '', ''];
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

  const width = Dimensions.get('screen').width;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 16}}>
      <View style={{flex: 1 / 2, justifyContent: 'space-between'}}>
        <View style={{marginTop: 32}}>
          <Text
            style={{fontSize: 20, fontFamily: 'Inter-Bold', color: '#000000'}}>
            Enter verification code
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Inter-Regular',
              color: '#666D80',
              width: width / 2 + 50,
              marginTop: 12,
            }}>
            We have sent the code verification to your mobile number
          </Text>
          <View style={{marginTop: 22}}>
            <OtpView
              disabled={false}
              value={value}
              onChange={handleOtpChange}
              length={6}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => {}} style={{marginTop: 21}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Inter-SemiBold',
                  color: '#3E52C1',
                }}>
                Resend Code
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 150}}>
            <PrimaryButton
              title="Sent Code"
              width={'100%'}
              height={56}
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'SetupScreen'}],
                  }),
                );
              }}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({});
