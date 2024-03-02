import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { PrimaryButton } from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { AuthParamList } from '../routes/AuthStack';

type PhoneNumberVerificationProps = NativeStackScreenProps<AuthParamList , 'PhoneNumberVerification'>

const PhoneNumberVerification = ({navigation} : PhoneNumberVerificationProps) => {
  const width = Dimensions.get('screen').width;
 const goToVerificationScreen = () =>{
    navigation.push('OTPVerificationScreen')
 }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 16 }}>
        <View style = {{ flex : 1/2 , justifyContent : 'space-between'}}>
      <View style = {{marginTop : 32}}>
        <Text
          style={{fontSize: 20, fontFamily: 'Inter-Bold', color: '#000000'}}>
          Enter your phone number
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Inter-Regular',
            color: '#666D80',
            width: width / 2 + 50,
            marginTop : 12
          }}>
          You'll receive a 4 digit code for the phone number verification
        </Text>
        <View style = {{borderWidth : 1 , borderRadius : 12 , padding : 3, marginTop : 15 , borderColor : '#ECEFF3' , backgroundColor : 'white' }}>
        <PhoneInput
          defaultCode="IN"
          layout="first"
          withDarkTheme
          autoFocus
          textInputProps={{placeholderTextColor: '#A4ACB9' ,placeholder :'Phone Number'}}
          flagButtonStyle={{ borderRightWidth : 1 , borderRightColor : '#C1C7D0'}}
          textContainerStyle={{  paddingVertical : 0  , borderRadius : 12 , backgroundColor : 'white'}}
          textInputStyle = {{fontSize : 14}}
          containerStyle = {{height : 55 , width : '100%'  }}
        />
      </View>
      <View style = {{marginTop : 150}}>
        <PrimaryButton title='Sent Code' width={'100%'} height={56} onPress={goToVerificationScreen}/>
      </View>
      </View>
      
      
      </View>
    </KeyboardAvoidingView>
  );
};

export default PhoneNumberVerification;

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
});
