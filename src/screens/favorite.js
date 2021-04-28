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
          dispatch(themeActions.Style.globalstyle({backgroundColor:'red'}));
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
          dispatch(themeActions.Style({backgroundColor:'blue'}));
        }}>
        <Text style={{color: 'white'}}>Yeşil</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Favorite;
const styles = StyleSheet.create({});
