import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native';
import {Home, Favorite, ShopList,Profile,Pantry} from '../screens';
import { useDispatch, useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#2dc268',
            inactiveTintColor: '#B9BDC7',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Recipes',
              tabBarIcon: ({color}) =><Icon name="note-text-outline" color={color} size={25}/>
            
            }}
            
          />
          <Tab.Screen
            name="Favorite"
            component={Favorite}
            options={{tabBarLabel: 'Favorite',
            tabBarIcon:({color})=> <Icon name="heart-outline" color={color} size={25}/>}}
          />
          <Tab.Screen
            name="ShopList"
            component={ShopList}
            options={{tabBarLabel: 'Shoplist',
            tabBarIcon:({color})=> <Icon name="cart-outline" color={color} size={25}/>}}
          />
          <Tab.Screen
            name="Pantry"
            component={Pantry}
            options={{tabBarLabel: 'Pantrys',
            tabBarIcon:({color})=> <Icon name="fridge-outline" color={color} size={25}/>}}
          />
            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{tabBarLabel: 'Profile',
            tabBarIcon:({color})=> <Icon name="account-outline" color={color} size={25}/>}}
          />
        </Tab.Navigator>
    </SafeAreaView>
  );
};
export default Router;
