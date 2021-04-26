import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { colors } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

const Pantry = ({navigation,route}) => {
  const selected = route?.params?.selected || null;
  const {Red} = useSelector(x => x.color.Red);
  return (
    <View style={{backgroundColor:Red,width:'100%',height:200}}>
      <Text>{selected}</Text>
    </View>
  );
};
export default Pantry;
const styles = StyleSheet.create({});
