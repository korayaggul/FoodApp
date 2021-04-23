import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {CookingTime} from './'
const Serving = ({navigation,count,setCount}) => {
  const [time,useTime]= useState(37.5);

  return (
    <View style={styles.main}>
    <View style={styles.leftArea}>


    <Text style={styles.servingText}>Servings</Text>
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> setCount(count >= 2 ? count - 1: count)} style={styles.button}>
      <Text  style={styles.text}>-</Text>
    </TouchableOpacity>
    <Text style={styles.count}>
      {count}
    </Text>
    <TouchableOpacity onPress={()=> setCount(count + 1)} style={styles.button}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.rightArea}>
    <View style={styles.cookingTime}>

    <Text style={styles.cookingText}>Cooking time</Text>
    </View>
    <View style={styles.timer}>
      <CookingTime time={time} count={count}/>
      
    </View>
    </View>
    </View>
  );
};
export default Serving;
const styles = StyleSheet.create({
  main:{
  flex:1,
  justifyContent:'flex-start',
  flexDirection:'row',
  backgroundColor:'#f2f2f2'
  },
  leftArea:{
   flex:1
  },
  rightArea:{
   flex:1.3,
   justifyContent:'center'
  },
  container:{
  width:'100%',
  justifyContent:'flex-start',
  flexDirection:'row',
  alignItems:'center',
  },
  button:{
    width:30,
    height:30,
    backgroundColor:'#b0b1b3',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    margin:10
  },
  count:{
    marginLeft:10,
    marginRight:10,
    color:'#565656'
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'500'
  },
  cookingTime:{
    flex:1,
  },
  timer:{
    flex:2,
    justifyContent:'center'
  },
  cookingText:{
    fontWeight:'bold',
    fontSize:17
  },
  servingText:{
    fontSize:17,
    fontWeight:'bold',
    marginLeft:10
  }
});
