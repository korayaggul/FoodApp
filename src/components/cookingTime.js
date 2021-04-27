import React, {Component, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {useSelector} from 'react-redux';
const CookingTime = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const Main = useSelector(x => x.color.Main);

  return (
    <ButtonGroup
      onPress={a => setSelectedIndex(a)}
      selectedIndex={selectedIndex}
      buttons={['15', '30', '45', '60']}
      containerStyle={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 0,
        margin: 30,
      }}
      buttonStyle={{
        width: 80,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5,
        marginBottom: 10,
      }}
      innerBorderStyle={{width: 0}}
      textStyle={{color: 'black'}}
      selectedButtonStyle={{backgroundColor: Main}}
    />
  );
};
export default CookingTime;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerStyle: {},
  buttonStyle: {
    width: 70,
    height: 20,
    backgroundColor: 'white',
  },

  text: {
    backgroundColor: 'white',
  },
});
