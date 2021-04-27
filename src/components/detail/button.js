import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';

const Button = ({navigation, title}) => {
  const Main = useSelector(x=> x.color.Main)
  const ButtonStyle = styled.TouchableOpacity`
    height: 30px;
    justify-content:center;
    border-radius:5px;
    alignItems:center;
    paddingLeft: 10px;
    paddingRight: 10px;
    margin:5px;
    background-color: ${Main} ;
  `;
  return (
    <View>
      <ButtonStyle >
        <Text style={styles.text}>{title}</Text>
      </ButtonStyle>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
 
  text: {
    color: 'white',
  },
});
