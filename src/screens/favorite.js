import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Actions as colorActions} from '../../redux/color/reducers';
import {Actions as themeActions} from '../../redux/theme/reducers';

const Favorite = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          dispatch(
            themeActions.SetStyle({
              iconColor: 'red',
              borderColor: 'red',
              activeTintColor: 'red',
              globalstyle: {
                backgroundColor: 'red',
                width: 300,
                height: 400,
              },
              Container: {
                flex: 1,
                backgroundColor: '#f1f1f1',
              },
              Color: {
                backgroundColor: 'red',
              },
              textColor: {
                color: 'red',
              },
            }),
          );
        }}>
        <Text style={{color: 'white'}}>Kırmızı</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          dispatch(
            themeActions.SetStyle({
              iconColor: '#2dc268',
              borderColor: '#2dc268',
              activeTintColor: '#2dc268',
              globalstyle: {
                backgroundColor: '#2dc268',
                width: 300,
                height: 400,
              },
              Container: {
                flex: 1,
                backgroundColor: '#f1f1f1',
              },
              Color: {
                backgroundColor: '#2dc268',
              },
              textColor: {
                color: '#2dc268',
              },
            }),
          );
        }}>
        <Text style={{color: 'white'}}>Yeşil</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Favorite;
const styles = StyleSheet.create({});
