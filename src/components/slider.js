import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useSelector} from 'react-redux';
import styled from "styled-components";

const Slider = ({navigation}) => {
  const [multiSliderValue, setMultiSliderValue] = useState([30, 600]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  const Color = useSelector(x => x.style.Color);
  const Border = useSelector(x => x.style.borderColor);
  const textColor = useSelector(x => x.style.textColor);


  return (
    <View style={{flex: 1, marginTop: '10%'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 10}}>
          <Text style={styles.calorificText}>Calorific Value</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.textArea}>
            <Text style={[styles.sliderText,textColor]}>{multiSliderValue[0]}</Text>
          </View>
          <Text>to</Text>
          <View style={styles.textArea}>
            <Text style={[styles.sliderText,textColor]}>{multiSliderValue[1]}</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 3}}>
        <MultiSlider
          min={30}
          max={600}
          step={5}
          selectedStyle={[Color,{ height: 5}]}
          trackStyle={{backgroundColor: '#e8e8e8', height: 3}}
          markerStyle={{
            borderRadius: 20,
            borderWidth: 5,
            borderColor: Border,
            backgroundColor: 'white',
            width: 30,
            height: 30,
          }}
          pressedMarkerStyle={{width: 35, height: 35}}
          values={[multiSliderValue[0], multiSliderValue[1]]}
          onValuesChange={multiSliderValuesChange}
          sliderLength={350}
          touchDimensions={{width: 100, height: 100}}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>30 kcal</Text>
          <Text>600 kcal</Text>
        </View>
      </View>
    </View>
  );
};
export default Slider;
const styles = StyleSheet.create({
  calorificText: {
    fontSize: 17,
    fontWeight: 'bold',
    right: 10,
  },

  textArea: {
    backgroundColor: '#e8e8e8',
    width: 60,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    
  },
  sliderText:{
    fontSize:25,
    fontWeight:'bold',
  }
});
