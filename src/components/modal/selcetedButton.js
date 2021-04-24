import React, {cloneElement, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const Selected = ({action}) => {
  const [contents, setContents] = useState([]);
  const [selected, setSelected] = useState(null);

  const array = [{name: 'Elma'}, {name: 'Armut'}, {name: 'Karpuz'}];

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

  console.log('contents', contents);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <SelectedView />

        <TouchableOpacity onPress={() => action(contents)}>
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
    height: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowRadius: 4,
    elevation: 20,
  },
  dropdown: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
