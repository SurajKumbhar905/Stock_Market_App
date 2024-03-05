// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View  , Dimensions} from 'react-native'
// import React from 'react'
// import StockList from './StockList'

// const Wishlist = () => {
//     const {height , width} = Dimensions.get('window')
//   return (
//     <View style = {{  }}>
//         <View style = {{flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'}}>
//       <Text style={{color: 'black', fontFamily: 'Inter-SemiBold', fontSize: 18}}>Wishlist</Text>
//         <TouchableOpacity style = {{ justifyContent : 'center' , alignItems : 'center' }}>
//             <Image 
//             style = {{resizeMode : 'center' , width : 22 , height : 22  }}
//             source={require('../../assets/Icons/plus-circle.png')}/>
//         </TouchableOpacity>
//         </View>
//         <FlatList
//         nestedScrollEnabled = {true}
//         data={[1,2,3,4 ,5 ,6,7 ,7 ,7 ,7 ,6 ,5 ,5 ,5 ,5]}
//         style = {{paddingTop : 18}}
//         renderItem={ ({index , item}) =>{
//             return (
//                 // <StockList logo={item[index].l} stockName= {item[]}/>
//             )
//         }}
//         keyExtractor={(item, index) => index.toString()}
//         />
//     </View>
//   )
// }

// export default Wishlist

// const styles = StyleSheet.create({})