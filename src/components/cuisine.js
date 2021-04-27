import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {useSelector} from 'react-redux';

const Cuisine = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const Main = useSelector(x => x.color.Main);

  return (
    <View style={{width: '100%', height: 100}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ButtonGroup
          onPress={a => setSelectedIndex(a)}
          selectedIndex={selectedIndex}
          buttons={[
            'American',
            'Arabic',
            'Asian',
            'Chiense',
            'Turkish',
            'German',
          ]}
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
          selectedTextStyle={styles.selectedText}
          selectedButtonStyle={{backgroundColor: Main}}
        />
      </ScrollView>
    </View>
  );
};
export default Cuisine;
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
  selectedButton: {
    backgroundColor: '#2dc268',
  },
  text: {
    backgroundColor: 'white',
  },
});
