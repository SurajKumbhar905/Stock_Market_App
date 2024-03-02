import { DimensionValue, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type DashViewPops = {
    width : DimensionValue
    height : DimensionValue
    color : string
}

const DashView = ({width , height , color}:DashViewPops) => {
  return (
    <View style = {{width : width , height : height , backgroundColor : color}}>
    </View>
  )
}

export default DashView

const styles = StyleSheet.create({})