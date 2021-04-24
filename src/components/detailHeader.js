import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { navigate } from '../../navigation/rootNavigation';
const Detail = ({navigation}) => {
  return (
    <View style={styles.area}>
    <TouchableOpacity onPress={()=> navigate('Router')}>

      <Icon name="chevron-left" size={20} color="white"/>
    </TouchableOpacity>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({
  area:{
    width:'100%',
    height:'20%',
    justifyContent:'center',
    marginLeft:'3%'
  }
});
