import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Favorite = ({navigation}) => {
  const [contents, setContents] = useState([]);

  const array = [{name: 'Elma'}, {name: 'Armut'}, {name: 'Karpuz'}];
  const SelectedView = () => {
    return array.map((item, index) => {
      <View style={{flex:1,width:'100%'}}>
      <TouchableOpacity
        key={index}
        onPress={() => {
          if (!contents(item.name)) {
            const newContents = contents
            newContents.push(item.name)
            setContents(newContents)
          }
        }}>
        <Text>{item.name}</Text>
        <Text>sasas</Text>
      </TouchableOpacity>
      </View>
    });
  };

  return (
    <View style={{flex: 1}}>
      <SelectedView />
      <View>
        {contents?.map(item => item)}
        <Text>Selecteds</Text>
      </View>
    </View>
  );
};
export default Favorite;
const styles = StyleSheet.create({});
