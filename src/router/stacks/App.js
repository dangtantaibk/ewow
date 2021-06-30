import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import HomeScreen from '../../screens/HomeScreen';

const App = props => {
  const Root = () => {
    return (
      <Stack.Navigator initialRouteName={'HOME_SCREEN'}>
        <Stack.Screen
          name="HOME_SCREEN"
          component={HomeScreen}
          options={({navigation, route}) => ({
            headerTitle: null,
            headerTransparent: true,
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={{width: '85%'}}>
        <Drawer.Screen name="ROOT" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
