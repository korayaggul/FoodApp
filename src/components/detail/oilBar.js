import React, {Component,useEffect,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const OilBar = ({navigation,count}) => {
  const [value,setValue]=useState(3);
  
  const impact = value * count;
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <View style={{width:105,height:105,backgroundColor:'white',position:'absolute',zIndex:1,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
        <Text>CAL</Text>
        <Text>{impact }</Text>
    </View>
<AnimatedCircularProgress
  size={120}
  width= {40}
  backgroundWidth={0}
  fill={impact*6}
  arcSweepAngle={360}
  tintColor="#2dc268"
  backgroundColor="white" />
    </View>
  );
};
export default OilBar;
const styles = StyleSheet.create({});
