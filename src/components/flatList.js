import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {navigate} from '../../navigation/rootNavigation';
import {Style} from '../theme'
import {useDispatch, useSelector} from 'react-redux';

const DATA = [
  {
    id: '1',
    title: 'Cook Now',
  },
  {
    id: '2',
    title: 'Breakfast',
  },
  {
    id: '3',
    title: 'Low Price',
  },
  {
    id: '4',
    title: 'Campaign',
  },
  {
    id: '5',
    title: 'Campaign',
  },
];
const FlatListComp = () => {
  const Color = useSelector(x=> x.style.Color)

  
  const Item = ({title}) => (
    <View
      style={{paddingLeft: 8, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={ [styles.button,Color]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={{}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: 'white',
  },
  button:{
    width: 100,
    height: 50,
    justifyContent:'center',
    borderRadius:16,
    alignItems:'center',
  }
});

export default FlatListComp;
