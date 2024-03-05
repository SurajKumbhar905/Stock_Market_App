import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
type StockNameProps = {
    image : ImageProps
    compamyName : string
    stockName  : string
}

const StockName = ({image , compamyName , stockName}:StockNameProps) => {
  return (
    <View style = {{flexDirection : 'row'  , justifyContent : 'flex-start' , alignItems : 'center', marginBottom : 24}}>
        <View style = {{backgroundColor : '#F8FAFB' , height : 40 , width : 40 , alignItems : 'center' , justifyContent : 'center'  ,borderRadius : 1000}}>
            
        <Image
        style = {{width : 24 , height : 24 , resizeMode : 'center'}}
        source={image}
        />
        </View>
        <View style = {{marginLeft : 12}}>
            <Text style = {{color : 'black' , fontSize : 14 , fontFamily : 'Inter-Bold'}}>{compamyName}</Text>
            <Text style = {{color : '#818898' , fontSize : 12 , fontFamily : 'Inter-Regular'}}>{stockName}</Text>
        </View>
    </View>
  )
}

export default StockName

const styles = StyleSheet.create({})