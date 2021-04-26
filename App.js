import React, {Component, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {isMountedRef} from './navigation/rootNavigation';

import {Stack} from './src/router';
const App = ({navigation}) => {
  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({});
