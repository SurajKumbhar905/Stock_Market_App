import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type AuthButtonProps = {
    BrandImage : ImageProps
    title : string
    onpress : ()=> void
}

const AuthButton = ({BrandImage , title , onpress}:AuthButtonProps) => {
  return (
    <View style = {{marginBottom : 16}}>
      <TouchableOpacity onPress={onpress} style = {{width : '100%' , height : 44 , flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center' , borderWidth : 1 , borderRadius : 6 , borderColor : '#C1C7D0'}}>
        <Image
        style = {{width : 20 , height : 20 , resizeMode : 'contain'}}
        source={BrandImage!}
        />
        <Text style = {{fontSize : 14 , fontFamily : 'Inter-Medium' , color : '#000000'}}>   {title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthButton

const styles = StyleSheet.create({})