import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import HomeScreen from '../../screens/HomeScreen';
import SplashScreen1 from '../../screens/SplashScreen';
import LoginScreen from '../../screens/LoginScreen';
import SearchScreen from '../../screens/SearchScreens/SearchScreen';
import BookDetailScreen from '../../screens/BookDetailScreen';
import SplashScreen from 'react-native-splash-screen';
import {Button, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

const App = props => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const Root = () => {
    return (
      <Stack.Navigator initialRouteName={'SPLASH_SCREEN'}>
        <Stack.Screen
          name="HOME_SCREEN"
          component={HomeScreen}
          options={({navigation, route}) => ({
            headerTitle: null,
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="LOGIN_SCREEN"
          component={LoginScreen}
          options={({navigation, route}) => ({
            headerTitle: null,
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="SPLASH_SCREEN"
          component={SplashScreen1}
          options={({navigation, route}) => ({
            headerTitle: null,
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="SEARCH_SCREEN"
          component={SearchScreen}
          options={({navigation, route}) => ({
            headerLeft: null,
            headerTitle: null,
            headerTransparent: true,
          })}
        />

        <Stack.Screen
          name="BOOK_DETAIL_SCREEN"
          component={BookDetailScreen}
          options={({navigation, route}) => ({
            headerLeft: null,
            headerTitle: null,
            headerTransparent: true,
          })}
        />
      </Stack.Navigator>
    );
  };

  function NotificationsScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                console.log('User signed out!');
              })
              .finally(() => {
                navigation.goBack();
                navigation.dispatch(
                  StackActions.replace('SPLASH_SCREEN', {
                    user: 'jane',
                  }),
                );
              });
          }}
          title="Đăng xuất"
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={{width: '85%'}}>
        <Drawer.Screen name="HOME" component={Root} />
        <Drawer.Screen name="Đăng xuất" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
