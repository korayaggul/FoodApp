import React, {Component, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import {isMountedRef} from './navigation/rootNavigation';
import rootReducer from "./redux/reducers";

import {Stack} from './src/router';

const store = createStore(
  rootReducer,
);

const App = ({navigation}) => {
  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <Stack />
    </SafeAreaView>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({});
