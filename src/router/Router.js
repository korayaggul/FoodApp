import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import { Home, DetailScreen,Favorite } from '../screens'
import {Carousel} from '../components'
import {navigationRef} from '../../navigation/rootNavigation';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />

    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef} >
        <Tab.Navigator tabBarOptions={{activeTintColor: 'green',inactiveTintColor:'#B9BDC7'}}>
          <Tab.Screen name="StackScreen" component={StackScreen} options={{tabBarLabel:'Recipes'}}/>
          <Tab.Screen name="Favorite" component={Favorite} options={{tabBarLabel:'Favorite'}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default Router;


