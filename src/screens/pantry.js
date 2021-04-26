import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Pantry = ({navigation,route}) => {
  const selected = route?.params?.selected || null;

  return (
    <View>
      <Text>{selected}</Text>
    </View>
  );
};
export default Pantry;
const styles = StyleSheet.create({});
