import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Selected = ({navigation}) => {
  const [country,setCountry]= useState('uk')
  return (
    <View>
    <DropDownPicker
    items={[
        {label: 'USA', value: 'usa'},
        {label: 'UK', value: 'uk',},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setCountry({country:item.value})}
/>
    </View>
  );
};
export default Selected;
const styles = StyleSheet.create({});
