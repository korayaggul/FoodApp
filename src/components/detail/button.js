import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({navigation, title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2dc268',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});
