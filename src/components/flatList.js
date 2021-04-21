import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar ,TouchableOpacity} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Settings',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
    <TouchableOpacity  style={styles.item}>

    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}

const styles = StyleSheet.create({
  
  item: {
    backgroundColor: '#00d611',
    borderRadius:10,
    height:100
  },
  title: {
    fontSize: 32,
  },
});

export default App;