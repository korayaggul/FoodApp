import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const text = ({navigation,title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default text;
const styles = StyleSheet.create({
  text:{
    

  }
});
