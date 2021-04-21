import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,TextInput } from 'react-native';

const SearchBar = ({ navigation }) => {
    return (
        <View style={styles.searchBarArea}>
        <View style={styles.searchBar}> 
         <View style={styles.icon}/>
        <TextInput
            
            placeholder="Search recipes..."
        />
        </View>

        </View>
    );
};
export default SearchBar;
const styles = StyleSheet.create({
    searchBarArea:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    searchBar:{
        width:'90%',
        backgroundColor:'white',
        borderRadius:30,
        margin:'8%',
        flexDirection:'row',
        alignItems:'center'
        
    },
    icon:{
        width:30,
        height:30,
        backgroundColor:'grey',
        margin:10,
        borderRadius:15
    }
});