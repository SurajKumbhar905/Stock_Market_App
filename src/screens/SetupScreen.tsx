import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { PrimaryButton } from '../components/Button'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { AuthParamList } from '../routes/AuthStack'
import { AuthContext } from '../Context/AuthContext'

type SetupScreenProps = NativeStackScreenProps<AuthParamList , 'SetupScreen'>


const SetupScreen = ({navigation}:SetupScreenProps) => {
  const {isLoggedIn , setLogeedin} = useContext(AuthContext)
  
  return (
    <View style = {{flex : 1 , backgroundColor : 'white' , justifyContent : 'space-between' , paddingVertical : 30}}>
    <View style = {{flex : 1/2 , justifyContent : 'flex-end' , alignItems : 'center' ,}}>
     <Image
     style = {{width : 80 , height : 80}}
     source={require('../../assets/Images/ShortLogo.png')}
     />
     <View style = {{ width : '95%' , alignItems :'center' , marginTop : 50 }}>
     <Text style = {{fontSize : 24 , fontFamily : 'Inter-Bold' ,color :'#000000' , width : '80%' , textAlign : 'center' , letterSpacing : 1}}>Hello Agatha Bella!👋 Welcome to StockWave</Text>
     <Text style ={{fontSize : 14 , fontFamily : 'Inter-Regular' , color : '#666666' , marginTop : 16}}>It’s great to have you here</Text>
     </View>
     </View>
     <View style = {{alignItems : 'center'}}>
        <PrimaryButton title='I’m ready to start!' height={56} width={'90%'} onPress={()=>setLogeedin(true)}/>
     </View>
    </View>
  )
}

export default SetupScreen

const styles = StyleSheet.create({})