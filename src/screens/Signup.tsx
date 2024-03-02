import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {PrimaryButton} from '../components/Button';
import DashView from '../components/DashView';
import AuthButton from '../components/AuthButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthParamList} from '../routes/AuthStack';

type SignUpScreenProps = NativeStackScreenProps<AuthParamList, 'Signup'>;

const Signup = ({navigation}: SignUpScreenProps) => {
  const [passWordVisible, setPassWordVisible] = useState(true);

  const goToSignUpScreen = () => {
    navigation.replace('SignIn');
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 16 }}>
        <View style  = {{height : 55 , backgroundColor : 'white'}}></View>
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
            Join StockWave
          </Text>
          <Text
            style={{
              width: 300,
              fontSize: 14,
              fontFamily: 'Inter-Regular',
              color: '#666D80',
              marginTop: 8,
            }}>
            Embark on your investment journey with a single dollar.
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={'#A4ACB9'}
            style={styles.input}
          />
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
            onPress={() => {}}
          />
        </View>
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
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={goToSignUpScreen}>
            <Text
              style={{
                color: '#3E52C1',
                fontSize: 14,
                fontFamily: 'Inter-SemiBold',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Signup;

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
