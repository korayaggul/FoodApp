import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TagSelector from 'react-native-tag-selector';

const ShopList = ({navigation}) => {
  const [selected, setSelected] = useState([]);
  tags = [
    {
      id: 'Onion',
      name: 'Onion',
    },
    {
      id: 'Pickle',
      name: 'Pickle',
    },
    {
      id: 'Mayonnaise',
      name: 'Mayonnaise',
    },
  ];

  return (
    <View>
      <Text>Selected: {selected.map(tag => `${tag} `)}</Text>
      <TagSelector
        maxHeight={70}
        tags={tags}
        onChange={selected => setSelected(selected)}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Pantry', {
            selected: selected,
          })
        }>
        <Text>tıkla</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ShopList;
