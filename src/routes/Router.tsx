import React, {useContext, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../Context/AuthContext';

const Router = () => {
  const {isLoggedIn, setLogeedin} = useContext(AuthContext);
  useEffect(() => {
    setLogeedin(true);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;