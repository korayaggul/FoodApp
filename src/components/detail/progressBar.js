import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

const OilBar = ({navigation, count, value, valueText, text, weight}) => {
  const Main = useSelector(x => x.color.Main);
  const TextStyle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${Main};
  `;
  const impact = value * count;
  const impactText = valueText * count;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 72,
          height: 72,
          backgroundColor: 'white',
          position: 'absolute',
          zIndex: 1,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>{text}</Text>

        <TextStyle>
          {impactText}
          {weight || ''}
        </TextStyle>
      </View>
      <AnimatedCircularProgress
        size={80}
        width={40}
        backgroundWidth={0}
        fill={impact}
        tintColor={Main}
        backgroundColor="white"
      />
    </View>
  );
};
export default OilBar;
const styles = StyleSheet.create({
  text: {
    color: '#959595',
    fontSize: 13,
    fontWeight: '800',
  },
  impactText: {
    color: '#38c56d',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
