import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Serving = ({navigation,count,setCount}) => {
  return (
    <View>
    <TouchableOpacity onPress={()=> setCount(count + 1)}>
      <Text>+</Text>
    </TouchableOpacity>
    <Text>
      {count}
    </Text>
    <TouchableOpacity onPress={()=> setCount(count >= 2 ? count - 1: count)}>
      <Text>-------</Text>
    </TouchableOpacity>
    </View>
  );
};
export default Serving;
const styles = StyleSheet.create({});
