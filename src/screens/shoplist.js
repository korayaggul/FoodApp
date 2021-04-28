import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const ShopList = ({navigation}) => {
  const Container = useSelector(x=> x.style.Container)
  const Style = useSelector(x=> x.style.globalstyle)
  return (
    <View style={Container}>  
    <View style={Style}>

      <Text >ShopList</Text>
    </View>
    </View>
  );
};
export default ShopList;
