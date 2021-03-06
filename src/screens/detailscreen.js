import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import {DetailHeader} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Serving, Button,ProgressBarItem} from '../components/detail';
import {SelectedButton} from '../components/modal';
import {useDispatch, useSelector} from 'react-redux';

const Detail = ({navigation, route}) => {
  const [modal, setModal] = useState(false);

  const [count, setCount] = useState(1);


  const title = route?.params?.title || null;
  const selected = route?.params?.selected || null;
  const Color = useSelector(x => x.style.Color);
  const Container = useSelector(x => x.style.Container);

  return (
    <View style={Container}>
      <View style={[styles.topArea, Color]}>
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
              <SelectedButton setModal={setModal} />
            </Modal>
            <TouchableOpacity
              style={[styles.modalButton, Color]}
              onPress={() => setModal(true)}>
              <Icon name="chevron-down" size={25} color="white" />
            </TouchableOpacity>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Button title="Beef" />
              <Button title="Cheese" />
              <Button title="Vegetables" />
              <View style={{flexDirection: 'row'}}>
                {selected?.length > 0 ? (
                  selected.map((item, index) => {
                    return (
                      <View key={index}>
                        <Button title={item} />
                      </View>
                    );
                  })
                ) : (
                  <View></View>
                )}
              </View>
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
            <ProgressBarItem count={count}/>
          </View>
        </View>
      </View>
      <View style={styles.footerArea}>
        <TouchableOpacity
          style={[styles.FooterButton,Color]}
          onPress={() => navigation.goBack()}>
          <View style={{right: 10}}>
            <Icon name="cart-outline" size={30} color="white" />
          </View>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Add Missing Ingredients ({count})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
console.log('styles2', styles);
const styles = StyleSheet.create({
  topArea: {
    flex: 1.3,
  },
  modalButton: {
    height: 30,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    paddingLeft: 7,
    paddingRight: 7,
  },
  bottomArea: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 2,
  },
  FooterButton: {
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
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
    flexDirection: 'row',
    alignItems: 'center',
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

  footerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
export default Detail;
