import React, {Component, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import { useSelector} from 'react-redux';

const DailyRegimen = () => {
  const Main = useSelector(x => x.color.Main);
  const [selectedIndex, setSelectedIndex] = useState(2);
  
  return (
    <ButtonGroup
      onPress={a => setSelectedIndex(a)}
      selectedIndex={selectedIndex}
      buttons={['Breakfast', 'Lunch', 'Snack', 'Dinner']}
      containerStyle={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 0,
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
      selectedTextStyle={styles.selectedText}
      selectedButtonStyle={{backgroundColor: Main}}
    />
  );
};
export default DailyRegimen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  selectedText: {
    color: 'white',
  },
  buttonStyle: {
    width: 70,
    height: 20,
    backgroundColor: 'white',
  },

  text: {
    backgroundColor: 'white',
  },
});
