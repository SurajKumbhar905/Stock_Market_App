import {View, Text} from 'react-native';
import React from 'react';
import Router from './routes/Router';
import {AuthContextProvider} from './Context/AuthContext';
import {AppAuthenticationContextProvider} from './Context/AppAuthenticationContext';

const App = () => {
  return (
    <AuthContextProvider>
      <AppAuthenticationContextProvider>
        <Router />
      </AppAuthenticationContextProvider>
    </AuthContextProvider>
  );
};

export default App;
