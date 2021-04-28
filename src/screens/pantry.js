import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonGroup = ({buttons, doSomethigAfterClick}) => {
  const [clickedId, setClickedId] = useState(-1);
  const onAction = (event, id, i) => {
    setClickedId(id);
    doSomethigAfterClick(event);
    console.log('id', id);
  };
  return (
    <>
      {buttons.map((buttonLabel, i) => {
        return (
          <TouchableOpacity
            key={i}
            name={buttonLabel}
            onPress={event => onAction(event, i)}
            style={i === clickedId ? styles.buttonActive : styles.button}>
            <Text style={styles.text}>{buttonLabel}</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};
const Pantry = ({navigation}) => {
  const printButtonLabel = event => {};
  return (
    <View>
      <ButtonGroup
        buttons={['One', 'Two', 'Three']}
        doSomethigAfterClick={printButtonLabel}
      />
    </View>
  );
};
export default Pantry;
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    margin: 5,
  },
  buttonActive: {
    backgroundColor: 'blue',
    margin: 5,
  },
  text: {
    color: 'white',
  },
});
