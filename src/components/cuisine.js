import React, { Component } from 'react'
import { Text, View,StyleSheet ,ScrollView} from 'react-native'
import { ButtonGroup } from 'react-native-elements';
export default class favorite extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  
  render () {
  
    const { selectedIndex } = this.state
    return (
        <View style={{width:'100%',height:100}}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={['American','Arabic','Asian','Chiense','Turkish','German']}
        containerStyle={{height:50,width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',borderWidth:0,margin:30}} 
        buttonStyle={{width:80,backgroundColor:'white',borderRadius:15,elevation:5,marginBottom:10,}}
        innerBorderStyle={{width: 0}}
        textStyle={{color:'black'}}
        selectedTextStyle={styles.selectedText}
        selectedButtonStyle={styles.selectedButton}
        
        />
      </ScrollView>

        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      
      
  },
  selectedText: {
  color:'white',

  },
  buttonStyle: {
    
      width:70,
      height:20,
      backgroundColor: 'white',
  },
  selectedButton:{
    backgroundColor:'#2dc268'
    
  },
  text:{
    backgroundColor:'white'
  }
  
});