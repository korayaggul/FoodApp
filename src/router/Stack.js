import * as React from 'react';
import {navigationRef} from '../../navigation/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Router} from './';
import { Home, DetailScreen } from '../screens'

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer ref={navigationRef} >
    <Stack.Navigator initialRouteName="Router" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="Router" component={Router} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}
export default StackScreen;