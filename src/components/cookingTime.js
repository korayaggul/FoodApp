import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
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
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={['15','30','45','60']}
        containerStyle={{height:50,width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',borderWidth:0,margin:30}} 
        buttonStyle={{width:80,backgroundColor:'white',borderRadius:15,elevation:5,marginBottom:10,}}
        innerBorderStyle={{width: 0}}
        textStyle={{color:'black'}}

        selectedButtonStyle={styles.selectedButton}
        
        />
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      
      
  },
  containerStyle: {


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