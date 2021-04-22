import React , {useState}from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {DetailHeader} from '../components';
import { Serving,CalorieBar,OilBar} from '../components/detail';
const Detail = ({navigation,route}) => {
  const[ count,setCount]=useState(1);
  const title = route?.params?.title || null;
  return (
    <View style={styles.main}>
    <View style={styles.topArea}>
    <View style={{flex:1,marginTop:10}}>

    <DetailHeader/>
    </View>
    <View style={{flex:1,justifyContent:'flex-end'}}>

<View style={styles.titleTextArea}>

      <Text style={styles.titleText}>{title}</Text>
</View>
    </View>

    </View>
    <View style={styles.bottomArea}>
     <Serving setCount={setCount} count={count}/>
     <CalorieBar count={count}/>
     <OilBar count={count} />
    </View>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({
  main:{
    flex:1
  },
  topArea:{
    flex:1,
    backgroundColor:'red'
  },
  bottomArea:{
    flex:2,
  },
  titleText:{
    marginLeft:20,
    marginBottom:20,
    fontSize:30,
    color:'white',
    fontWeight:'bold'
    
  },
  titleTextArea:{
    width:'40%'
  }
});
