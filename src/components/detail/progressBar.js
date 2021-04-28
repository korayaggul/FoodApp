import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

const OilBar = ({navigation, count, value, valueText, text, weight}) => {
  const Main = useSelector(x => x.color.Main);
  const TextColor = useSelector(x => x.style.textColor);

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

        <Text style={[styles.impactText,TextColor]}>
          {impactText}
          {weight || ''}
        </Text>
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
    fontWeight: 'bold',
    fontSize: 20,
  },
});
