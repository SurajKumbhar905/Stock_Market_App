import { StyleSheet, Text, TouchableOpacity, View , ScrollView , KeyboardAvoidingView , Image , Platform , TextInput } from 'react-native'
import React, { useState } from 'react'
import { PrimaryButton } from '../components/Button';
import DashView from '../components/DashView';
import AuthButton from '../components/AuthButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { AuthParamList } from '../routes/AuthStack';

type SignInProps = NativeStackScreenProps<AuthParamList,'SignIn'>

const SignIn = ({navigation}:SignInProps) => {
  const [passWordVisible, setPassWordVisible] = useState(true);

  const goToSignUpScreen = () => {
    navigation.replace('Signup');
  };

  const goToPhoneNumberVerificationScreen = () =>{
    navigation.push('PhoneNumberVerification')
  }

  return (
    <ScrollView
    style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 16 }}>
      <View style  = {{height : 105 , backgroundColor : 'white'}}></View>
    <KeyboardAvoidingView
      style={{flex: 1, justifyContent: 'space-between'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Image
          style={{width: 32, height: 32}}
          source={require('../../assets/Images/ShortLogo.png')}
        />
      </View>
      <View style={{marginTop: 35}}>
        <Text
          style={{fontSize: 20, fontFamily: 'Inter-Bold', color: '#000000'}}>
          Hi There 👋
        </Text>
        <Text
          style={{
            width: 300,
            fontSize: 14,
            fontFamily: 'Inter-Regular',
            color: '#666D80',
            marginTop: 8,
          }}>
          Welcome back, Sign in to your account
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'#A4ACB9'}
          style={styles.input}
          keyboardType='email-address'
        />
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#A4ACB9'}
            autoCorrect={false}
            style={[
              {
                width: '90%',
                paddingHorizontal: 0,
                color: '#000000',
                fontSize: 14,
                fontFamily: 'Inter-Regular',
              },
            ]}
            secureTextEntry={passWordVisible}
          />
          <TouchableOpacity
            onPress={() => setPassWordVisible(!passWordVisible)}>
            <Image
              style={{width: 20, height: 20, resizeMode: 'contain'}}
              source={
                passWordVisible
                  ? require('../../assets/Icons/EyeOff.png')
                  : require('../../assets/Icons/Eye.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 24}}>
        <PrimaryButton
          title="Continue"
          width="100%"
          height={56}
          onPress={goToPhoneNumberVerificationScreen}
        />
      </View>
      <TouchableOpacity style = {{flex : 1 , marginTop : 16 , alignItems : 'flex-end'}}>
        <Text style = {{fontSize : 14 , fontFamily : 'Inter-SemiBold' , color : '#3E52C1'}}>Forgot Password?</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 30,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <DashView width={'30%'} height={1} color="#C1C7D0" />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Inter-Medium',
            color: '#818898',
          }}>
          Or Continue with
        </Text>
        <DashView width={'30%'} height={1} color="#C1C7D0" />
      </View>
      <View style={{marginTop: 30}}>
        <AuthButton
          title="Continue with Google"
          BrandImage={require('../../assets/Icons/Google.png')}
          onpress={() => {}}
        />
        <AuthButton
          title="Continue with Apple"
          BrandImage={require('../../assets/Icons/Apple.png')}
          onpress={() => {}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Text
          style={{
            color: '#818898',
            fontSize: 14,
            fontFamily: 'Inter-Medium',
          }}>
          Dont't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={goToSignUpScreen}>
          <Text
            style={{
              color: '#3E52C1',
              fontSize: 14,
              fontFamily: 'Inter-SemiBold',
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  </ScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d7d7d7',
    marginTop: 16,
    alignSelf: 'center',
    paddingHorizontal: 16,
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
})