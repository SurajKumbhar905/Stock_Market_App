import {
  View,
  Text,
  Image,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import PortfolioScreen from '../screens/PortfolioScreen';
import OrderScreen from '../screens/OrderScreen';
import NewesScreen from '../screens/NewesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {
  DefaultNavigationBar,
  HomeScreenNavigation,
} from '../components/NavigationBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LanguageScreen from '../screens/LanguageScreen';
import AccountScreen from '../screens/AccountScreen';
import {useTranslation} from 'react-i18next';

export type AppStacParamList = {
  Home: undefined;
  PortfolioScreen: undefined;
  OrderScreen: undefined;
  NewesScreen: undefined;
  Setting: undefined;
};

export type SettingStackParamList = {
  Profile: undefined;
  Account: undefined;
  BillingPyament: undefined;
  Language: undefined;
  Settings: undefined;
  FAQ: undefined;
};

const Tab = createBottomTabNavigator<AppStacParamList>();

const SettingStack = createNativeStackNavigator<SettingStackParamList>();
const Setting = () => {
  const {t, i18n} = useTranslation();
  return (
    <SettingStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShadowVisible: false,
      }}>
      <SettingStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: props => (
            <DefaultNavigationBar
              children="Profile"
              showBackButton={true}
              showTitle={true}
            />
          ),
        }}
      />
      <SettingStack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: `${t('Language')}`,
        }}
      />
      <SettingStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </SettingStack.Navigator>
  );
};

const CouctomeTabBarButton = ({children, onPress}: BottomTabBarButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: '#3E52C1',
        borderRadius: 20,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarStyle: {
          // alignItems: 'flex-end',
          height: 87,
          elevation: 0,
          borderWidth: 0,
          borderColor: 'white',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon({focused}) {
            let iconName: ImageProps;
            iconName = focused
              ? require('../../assets/Icons/home/filled.png')
              : require('../../assets/Icons/home/outline.png');
            return <Image style={styles.TabBarImage} source={iconName} />;
          },
          // headerTransparent : true,
          headerTitle: props => (
            <HomeScreenNavigation
              {...props}
              showBackButton={true}
              showTitle={true}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{
          tabBarIcon({focused}) {
            let iconName: ImageProps;
            iconName = focused
              ? require('../../assets/Icons/data/filled.png')
              : require('../../assets/Icons/data/outline.png');
            return <Image style={styles.TabBarImage} source={iconName} />;
          },
          // headerTransparent : true,
          headerTitle: props => (
            <DefaultNavigationBar
              children="PortfolioScreen"
              showBackButton={false}
              showTitle={false}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarIcon() {
            let iconName: ImageProps;
            iconName = require('../../assets/Icons/swap.png');
            return (
              <Image
                style={[styles.TabBarImage, , {tintColor: 'white'}]}
                source={iconName}
              />
            );
          },
          tabBarButton(props) {
            return <CouctomeTabBarButton {...props} />;
          },
          headerTitle: props => (
            <DefaultNavigationBar
              {...props}
              showBackButton={false}
              showTitle={false}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="NewesScreen"
        component={NewesScreen}
        options={{
          tabBarIcon({focused}) {
            let iconName: ImageProps;
            iconName = focused
              ? require('../../assets/Icons/ArrowTrending.png')
              : require('../../assets/Icons/ArrowTrending.png');
            return <Image style={styles.TabBarImage} source={iconName} />;
          },
          // headerTransparent : true,
          headerTitle: props => (
            <DefaultNavigationBar
              {...props}
              showBackButton={false}
              showTitle={false}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon({focused}) {
            let iconName: ImageProps;
            iconName = focused
              ? require('../../assets/Icons/user/filled.png')
              : require('../../assets/Icons/user/outline.png');
            return <Image style={styles.TabBarImage} source={iconName} />;
          },

          // headerTransparent : true,
          headerShown: false,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  TabBarImage: {
    width: 24,
    height: 24,
  },
});

export default AppStack;
