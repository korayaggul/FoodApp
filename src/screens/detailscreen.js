import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal,ScrollView} from 'react-native';
import {DetailHeader} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Serving, ProgressBar, Button} from '../components/detail';
import {SelectedButton} from '../components/modal';
const Detail = ({navigation, route}) => {
  const [modal, setModal] = useState(false);

  const [count, setCount] = useState(1);
  const [valueProtein, setValue] = useState(24.5);
  const [valueOil, setOil] = useState(3.5);
  const [valueCalorie, setCalorie] = useState(293.5);
  const [valueCarbs, setCarbs] = useState(40);

  const oilNumber = valueOil * 6;
  const calorieNumber = valueCalorie / 10.5;
  const carbsNumber = valueCarbs / 1.08;
  const proteinNumber = valueProtein * 1.36;

  const OnAction = ({selectedValue}) => {
    console.log('sa',selectedValue)
    return(
      <View>
      <Text>{selectedValue}</Text> 
     
      </View>
      
    )
  };

  const title = route?.params?.title || null;
  return (
    <View style={styles.main}>
      <View style={styles.topArea}>
        <View style={{flex: 1, marginTop: 10}}>
          <DetailHeader />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.titleTextArea}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomArea}>
        <View style={styles.container}>
          <View style={styles.buttonArea}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modal}
              onRequestClose={() => {
                setModal(!modal);
              }}>
              <SelectedButton action={OnAction} setModal={setModal} />
            </Modal>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <Button title="Beef"/>
            <Button title="Cheese"/>
            <Button title="Vegetables"/>
          
            <OnAction/>
            <TouchableOpacity style={styles.modalOpenButton} onPress={() => setModal(true)}>
              <Icon name="chevron-down" size={25} color="white"/>
            </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.servingArea}>
            <Serving setCount={setCount} count={count} />
          </View>
          <View style={styles.startCookingArea}>
            <TouchableOpacity style={styles.starCooking}>
              <Text style={styles.cookingText}>Start cooking</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressBarArea}>
            <View>
              <Text style={styles.barText}>
                Nutrition Information per Serving
              </Text>
            </View>
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
          </View>
        </View>
      </View>
      <View style={styles.footerArea}>
        <TouchableOpacity style={styles.footerButton}>
          <View style={{right: 10}}>
            <Icon name="cart-outline" size={30} color="white" />
          </View>
          <Text style={styles.footerButtonText}>
            Add Missing Ingredients ({count})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  topArea: {
    flex: 1.3,
    backgroundColor: 'red',
  },
  bottomArea: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 2,
  },
  titleText: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  titleTextArea: {
    width: '70%',
  },
  buttonArea: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center'
  },
  servingArea: {
    flex: 1,
  },
  startCookingArea: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarArea: {
    flex: 2,
    width: '100%',
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  starCooking: {
    width: '95%',
    backgroundColor: 'white',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cookingText: {
    fontSize: 20,
  },
  barText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 15,
  },
  footerArea: {
    width: '100%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    elevation: 24,
    shadowColor: '#000',
  },
  footerButton: {
    width: '90%',
    height: '60%',
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: '#2dc268',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  modalOpenButton:{
    backgroundColor: '#2dc268',
    paddingLeft:7,
    paddingRight:7,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    top:5
  }
});
