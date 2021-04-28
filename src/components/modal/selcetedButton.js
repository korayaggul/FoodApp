import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import TagSelector from 'react-native-tag-selector';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const Selected = ({action, setModal, props}) => {

  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);
  const Color = useSelector(x=> x.style.Color);

  const Main = useSelector(x => x.color.Main);
  const ButtonStyle = styled.TouchableOpacity`
   
  `;
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
          selectedTagStyle={{color: Main, margin: 10}}
          tags={tags}
          onChange={selected => setSelected(selected)}
        />
        <TouchableOpacity
         style={[styles.mainButton,Color]}
          onPress={() => {
            navigation.navigate('DetailScreen', {
              selected: selected,
            });
            setModal(false);
          }}>
          <Text style={{color: 'white'}}>Gönder</Text>
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
    alignItems: 'center',
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
  mainButton:{
    width: '90%',
    height: '10%',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    margin: 20,
  }
});
