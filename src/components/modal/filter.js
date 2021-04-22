import React, { Component, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import { ButtonGroup } from '../'
const Filter = ({ setModalFilter }) => {
  return (
    <View style={styles.centeredView}>
      <View style={[styles.modalView]}>

        <View style={styles.container}> 


          <View style={styles.modalTitleArea}>
            <View style={styles.titleLeft}>

              <Text style={([styles.modalTitle])}>
                Filters
          </Text>
            </View>
            <View style={styles.titleRight}>

              <TouchableOpacity>
                <Text style={([styles.modalTitle])}>
                  Reset
          </Text>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalFilter(false)}>
                <Text style={([styles.modalTitle])}>
                  Go
          </Text>

              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'green' }}>

            <ButtonGroup />
          </View>

        </View>
      </View>
    </View>
  );
};
export default Filter;
const styles = StyleSheet.create({


  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },

  modalView: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowRadius: 4,
    elevation: 20,
  },
  modalTitleArea: {
    width: '100%',
    height: '10%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ededed',
    flexDirection: 'row'
  },
  titleLeft: {
    flex: 1,
    justifyContent: 'center',

  },
  titleRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  container:{
    flex:1,
  }
});
