import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import TagSelector from 'react-native-tag-selector';
import {useNavigation} from '@react-navigation/native';
import color from 'color';

const Selected = ({action, setModal, props}) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

  const tags = [
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
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TagSelector
          containerStyle={styles.container}
          tagStyle={styles.tag}
          selectedTagStyle={styles.selectedTag}
          tags={tags}
          onChange={selected => setSelected(selected)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('DetailScreen', {
              selected: selected,
            });
            setModal(false);
          }}>
          <Text>Gönder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Selected;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowRadius: 4,
    elevation: 20,
  },
  dropdown: {
    padding: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  button: {
    width: '90%',
    height: '10%',
    borderRadius: 50,
    backgroundColor: '#2dc268',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tag: {
    color: 'grey',

    margin: 10,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },
  selectedTag: {
    color: '#2dc268',
    margin: 10,
  },
});
