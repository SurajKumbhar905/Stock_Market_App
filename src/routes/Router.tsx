import React, {useContext, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../Context/AuthContext';
import { AppAuthenticationContext } from '../Context/AppAuthenticationContext';
import PinScreen from '../screens/PinScreen';

const Router = () => {
  const {isLoggedIn, setLogeedin} = useContext(AuthContext);
  const {isPinMatch} = useContext(AppAuthenticationContext)
  useEffect(() => {
    setLogeedin(true);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ?  isPinMatch ?  <AppStack/> : <PinScreen/> : <AuthStack />}
    
    </NavigationContainer>
  );
};

export default Router;