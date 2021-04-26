import React, {cloneElement, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const Selected = ({action, setModal}) => {
  const [contents, setContents] = useState([]);
  const [selected, setSelected] = useState(null);

  const array = [{name: 'Onion'}, {name: 'Pickle'}, {name: 'Mayonnaise'}];

  const onAction = content => {
    setSelected(content);

    const filterContent = contents?.filter(
      filter => filter.name === content.name,
    );
    if (filterContent?.length === 0) {
      contents.push(content);
      setContents(contents);
    } else {
      const removeContent = contents?.filter(
        filter => filter.name !== content.name,
      );
      setContents(removeContent);
    }
  };

  const SelectedView = () => {
    return array.map((item, index) => {
      const filterContent = contents?.filter(
        filter => filter.name === item.name,
      );

      let selectedContent = {
        fontWeight: '100',
      };
      if (filterContent?.length > 0) {
        selectedContent = {
          fontWeight: 'bold',
          color: '#2dc268',
          textDecorationLine: 'underline',
        };
      }
      return (
        <TouchableOpacity
          style={styles.dropdown}
          key={index}
          onPress={() => onAction(item)}>
          <Text style={selectedContent}>{item.name}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <SelectedView />

        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setModal(false);
              action(contents);
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Gönder</Text>
          </TouchableOpacity>
        </View>
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
    height: '20%',
    borderRadius: 50,
    backgroundColor: '#2dc268',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
