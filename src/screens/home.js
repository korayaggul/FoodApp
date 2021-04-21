import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Carousel, SearchBar, FlatList } from '../components'
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchArea}>
                <SearchBar />

            </View>
            <View style={styles.carousel}>

                <Carousel />
            </View>
            <View style={styles.flatList}> 

                <FlatList />
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
        flex: 1
    },
    carousel: {
        flex: 4
    }
});