import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Slider = ({navigation}) => {
    const [multiSliderValue, setMultiSliderValue] = useState([30, 600])
    const multiSliderValuesChange = (values) => setMultiSliderValue(values)
  return (
    <View>
      <Text>{multiSliderValue[0]}</Text>
      <Text>{multiSliderValue[1]}</Text>
      <MultiSlider
          min={30}
          max={600}
          selectedStyle={{backgroundColor:'#2dc268',height:5}}
          trackStyle={{backgroundColor:'grey',height:3}}
          markerStyle={{borderRadius:20,borderWidth:5,borderColor:'#2dc268',backgroundColor:'white',width:35,height:35,}}
          values={[multiSliderValue[0],multiSliderValue[1]]}
          onValuesChange={multiSliderValuesChange}
          sliderLength={350}
          touchDimensions={{width:100,height:100}}
      />
    </View>
  );
};
export default Slider;
const styles = StyleSheet.create({});
