import { View, Text } from 'react-native'
import React from 'react'
import AuthStack from './AuthStack'
import AppStack from './AppStack'

import {NavigationContainer} from '@react-navigation/native'

const Router = () => {
  return (
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
  )
}

export default Router