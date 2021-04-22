import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Modal } from 'react-native';
import { Carousel, SearchBar, FlatList } from '../components'
import {Filter} from '../components/modal';

import Icon from 'react-native-vector-icons/Feather';

const Home = ({ navigation }) => {
    const [modalFilter, setModalFilter] = useState(false);
    const FilterIcon = <Icon name="sliders" size={20} color="white"/>;
    return (
        <View style={styles.container}>
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
            
            <Filter setModalFilter={setModalFilter}/>
          </Modal>
          <View style={styles.flatListArea}>
          <View style={{right:'10%'}}>

          <TouchableOpacity onPress={()=> setModalFilter(true)} style={styles.modalButton}>
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
    container: {
        flex: 1,
        backgroundColor: '#efefef',
    },
    searchArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatList: {
        flex: 1,
       

    },
    carousel: {
        flex: 4
    },
    flatListArea:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'15%',
        flexDirection:'row'
    },
    modalButton:{
        width:50,
        height:50,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00d611',

    },
    modalText: {
        fontSize: 15,
        color:'white'
      },
});