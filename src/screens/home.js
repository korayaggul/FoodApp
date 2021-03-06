import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Carousel, SearchBar, FlatList} from '../components';
import {Filter} from '../components/modal';
import Icon from 'react-native-vector-icons/Feather';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
const Home = ({navigation}) => {
  const [modalFilter, setModalFilter] = useState(false);
  const FilterIcon = <Icon name="sliders" size={20} color="white" />;

  const Container = useSelector(x=> x.style.Container)
  const Color = useSelector(x=> x.style.Color)
 
 
  return (
    <View style={Container}>
      <View style={styles.searchArea}>
        <SearchBar />
      </View>
      <View style={styles.carousel}>
        <Carousel />
      </View>

      <View style={styles.flatList}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalFilter}
          onRequestClose={() => {
            setModalFilter(!modalFilter);
          }}>
          <Filter setModalFilter={setModalFilter} />
        </Modal>
        <View style={styles.flatListArea}>
          <View style={{right: '10%'}}>
            <TouchableOpacity
              style={[styles.modalButton,Color]}
              onPress={() => setModalFilter(true)}
              >
              {FilterIcon}
            </TouchableOpacity>
          </View>
          <FlatList />
        </View>
      </View>
    </View>
  );
};


export default Home;
const styles = StyleSheet.create({
 
  modalButton:{
    width: 50,
    height: 50,
    justifyContent:'center',
    borderRadius:16,
    alignItems:'center',
  },
  searchArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  carousel: {
    flex: 4,
  },
  flatListArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
    flexDirection: 'row',
  },
  
  modalText: {
    fontSize: 15,
    color: 'white',
  },
});