import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({navigation}) => {
  return (
    <View style={styles.searchBarArea}>
      <View style={styles.searchBar}>
        <View style={styles.icon}>
          <Icon name="search" size={20} color="lightgreen" />
        </View>
        <TextInput placeholder="Search recipes..." />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  searchBarArea: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
    margin: '8%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
