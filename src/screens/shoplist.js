import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const ShopList = ({navigation}) => {
  const Style = useSelector(x=> x.style.globalstyle)
 console.log('Style',Style);
  return (
    <View style={[Style]}>
      <Text >ShopList</Text>
    </View>
  );
};
export default ShopList;
