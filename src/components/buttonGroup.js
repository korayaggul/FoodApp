import React, {Component,useState} from 'react';
import {Text, View, StyleSheet, TouchableHighlight,TouchableOpacity} from 'react-native';

const ButtonGroup = ({navigation}) => {
  const [pressed,usePressed]= useState(false);
  return (
    <View style={{flex:1}}>

    <View style={styles.titleArea}>
      <Text>Cooking Time</Text>
    </View>
     <TouchableHighlight
            onPress={() => {
                // Alert.alert(
                //     `You clicked this button`,
                //     'Hello World！',
                //     [
                //         {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                //         {text: 'OK', onPress: () => console.log('OK Pressed')},
                //     ]
                // )
            }}
            style={[
                styles.button,
                pressed ? { backgroundColor: "blue" } : { backgroundColor:'red'}
            ]}
            onHideUnderlay={() => {
                usePressed(pressed);
            }}
            onShowUnderlay={() => {
                usePressed(true);
            }}
        >

      <Text>1</Text>
    </TouchableHighlight>
    </View>
  );
};
export default ButtonGroup;
const styles = StyleSheet.create({
  button:{
    backgroundColor: "blue",
    }
});
