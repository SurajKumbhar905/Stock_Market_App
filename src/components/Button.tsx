import { DimensionValue, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ButtonType = {
    onPress : ()=> void
    title  : string
    width : DimensionValue
    height : DimensionValue
}

export const PrimaryButton = ({onPress , title  , width , height } : ButtonType) => {
  return (
   <TouchableOpacity onPress={onPress}  style = {{backgroundColor : '#3E52C1' , width :width   , height : height , borderRadius : 16}}>
    <View style = {{flex:1 , justifyContent:'center' , alignItems : 'center'}}>
        <Text style ={{color : '#FFFFFF', fontSize : 14 , fontFamily : 'Inter-SemiBold'}}>{title}</Text>
    </View>
   </TouchableOpacity>
  )
}

export const SecondaryButton = ({onPress , title  , width , height } : ButtonType) => {
    return (
        <TouchableOpacity onPress={onPress}  style = {{backgroundColor : '#FFFFF' , width :width   , height : height , borderRadius : 16  , borderWidth: 1, borderColor : '#3E52C1' }}>
        <View style = {{flex:1 , justifyContent:'center' , alignItems : 'center'  , borderRadius : 14}}>
            <Text style ={{color : '#3E52C1', fontSize : 14 , fontFamily : 'Inter-SemiBold'}}>{title}</Text>
        </View>
       </TouchableOpacity>
    )
  }

  export const LabelButton = ({onPress , title  } : ButtonType) => {
    return (
      <View>
        <Text>Button</Text>
      </View>
    )
  }



const styles = StyleSheet.create({})