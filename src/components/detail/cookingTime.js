import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const CookingTime = ({navigation,time,count}) => {
  const timer = time * count
  const hours = Math.floor(timer /60);
  const minutes = timer % 60 ;
  const duration = hours + " hr "+ minutes +" min";
  return ( 
    <View>
      <Text style={styles.time}>{duration}</Text>
    </View>
  );
};
export default CookingTime;
const styles = StyleSheet.create({
  time:{
    color:'#505050'
  }
});
