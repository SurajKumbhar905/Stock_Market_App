import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopGainer = () => {
  return (
    <View style = {{ justifyContent : 'space-between', paddingHorizontal : 16 , paddingVertical : 20}}>
     <View style = {{marginBottom : 25}}>
        <Text style  = {{color : 'black',fontFamily : 'Inter-SemiBold' , fontSize : 18}}>Top Gainer</Text>
     </View>
     <View style = {{height : 139 }}>
        <FlatList
        horizontal
        data={[1,2,3,4]}
        renderItem={({item, index, separators}) => (
            <View key={index} style = {{  height : '100%' , width : 212  , borderWidth : 1 , borderRadius : 6 , borderColor : '#EAEAEA'}}>
                <View style = {{ flex : 1/2  ,alignItems : 'center' , flexDirection :'row' , paddingHorizontal : 20}}>
                  <Text style = {{color : 'black'}}>Suraj</Text>  
                  <Text style = {{paddingLeft : 12 , color : 'black'}}>Suraj</Text>  
                </View>
                <View style = {{backgroundColor : 'blue' , flex : 1/2 , flexDirection : 'row'}}>
                    <View style = {{backgroundColor : 'red' , flex : 1/3 }}></View>
                </View>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View  
            style={{  
                width: 16,   
            }}  
        />  
          )}
        //   columnWrapperStyle={{
        //     // justifyContent: "space-between",
        //   }}
        />
     </View>
    </View>
  )
}

export default TopGainer

const styles = StyleSheet.create({})