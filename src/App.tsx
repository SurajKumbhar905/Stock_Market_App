import { View, Text } from 'react-native'
import React from 'react'
import Router from './routes/Router'
import { AuthContextProvider } from './Context/AuthContext'

const App = () => {
  return (
    <AuthContextProvider>
      <Router/>
    </AuthContextProvider>
  )
}

export default App