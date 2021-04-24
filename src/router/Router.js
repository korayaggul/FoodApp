import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import { Home, DetailScreen,Favorite,Test } from '../screens'
import {Carousel} from '../components'
import {navigationRef} from '../../navigation/rootNavigation';

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

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator tabBarOptions={{activeTintColor: '#2dc268',inactiveTintColor:'#B9BDC7'}}>
          <Tab.Screen name="Home" component={Home} options={{tabBarLabel:'Recipes'}}/>
          <Tab.Screen name="Favorite" component={Favorite} options={{tabBarLabel:'Favorite'}}/>
          <Tab.Screen name="Test" component={Test} options={{tabBarLabel:'Test'}}/>
        </Tab.Navigator>
    </SafeAreaView>
  );
}
export default StackScreen;


