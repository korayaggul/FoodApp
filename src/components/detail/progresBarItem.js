import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { ProgressBar } from './';

const progressBarItem = ({count}) => {
  const valueProtein = 24.5;
  const valueOil = 3.5;
  const valueCalorie = 293.5;
  const valueCarbs = 40;

  const oilNumber = valueOil * 6;
  const calorieNumber = valueCalorie / 10.5;
  const carbsNumber = valueCarbs / 1.08;
  const proteinNumber = valueProtein * 1.36;
  return (
    <View style={styles.progressBar}>
      <ProgressBar
        count={count}
        valueText={valueCalorie}
        text="CAL"
        value={calorieNumber}
      />
      <ProgressBar
        count={count}
        valueText={valueOil}
        text="FAT"
        value={oilNumber}
        weight="g"
      />
      <ProgressBar
        count={count}
        valueText={valueCarbs}
        text="CARBS"
        value={carbsNumber}
        weight="g"
      />
      <ProgressBar
        count={count}
        valueText={valueProtein}
        text="PROT"
        value={proteinNumber}
        weight="g"
      />
    </View>
  )
};
export default progressBarItem;
const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

})