import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';

const Button = ({navigation, title}) => {
  const Main = useSelector(x=> x.color.Main);
  const Color = useSelector(x=> x.style.Color);

  const ButtonStyle = styled.TouchableOpacity`
    height: 30px;
    justify-content:center;
    border-radius:5px;
    alignItems:center;
    paddingLeft: 10px;
    paddingRight: 10px;
    margin:5px;
  `;
  return (
    <View>
      <TouchableOpacity style={[styles.button,Color]} >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  button:{
   height:30,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:5,
   paddingLeft:10,
   paddingRight:10,
   margin:5
  },
  text: {
    color: 'white',
  },
});
