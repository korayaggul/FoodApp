import React, {Component, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import {CookingTime, DailyRegimen, Slider, Cuisine} from '../';
const Filter = ({setModalFilter}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={styles.modalTitleArea}>
            <View style={styles.titleLeft}>
              <Text style={[styles.modalTitle]}>Filters</Text>
            </View>
            <View style={styles.titleRight}>
              <TouchableOpacity>
                <Text style={[styles.resetText]}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalFilter(false)}>
                <Text style={[styles.goText]}>Go!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginLeft: '4%',
              marginRight: '4%',
            }}>
            <View style={styles.cookingArea}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.text}>Cooking Time</Text>

                  <Text style={styles.rightText}>min</Text>
                </View>
              </View>
              <CookingTime />
            </View>

            <View style={styles.cookingAreaa}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={styles.text}>Daily Regimen</Text>
                </View>
              </View>
              <DailyRegimen />
            </View>
            <View style={{flex: 1}}>
              <Slider />
            </View>
            <View style={{width: '100%', bottom: 20, height: '20%'}}>
              <Text style={styles.cuisineText}>Cuisine</Text>
              <Cuisine />
            </View>
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
  modalTitleArea: {
    width: '100%',
    height: '10%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  modalTitle: {
    marginLeft: 20,
    fontSize: 25,
    color: '#474747',
    fontWeight: 'bold',
  },
  resetText: {
    marginLeft: 20,
    fontSize: 15,
    color: '#bcbcbc',
    fontWeight: 'bold',
  },
  goText: {
    marginLeft: 20,
    fontSize: 25,
    color: '#2dc268',
    fontWeight: 'bold',
  },
  titleLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  titleRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20,
  },
  container: {
    flex: 1,
  },
  cookingArea: {
    marginTop: '5%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  cuisineArea: {
    marginTop: '5%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  cookingAreaa: {
    marginTop: '5%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  rightText: {
    color: 'grey',
    fontSize: 12,
    marginRight: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cuisineText: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
});
