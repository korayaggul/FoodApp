import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView ,
  TouchableOpacity
} from 'react-native';
import {navigate} from '../../navigation/rootNavigation';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Toast with Salmon and Eggs",
          },
          {
            title:"Beef Burger",

          },
          {
            title:"Taze Sogan Ekmek",

          },
          {
            title:"Turşu Suyu",

          },
          {
            title:"Leblebi",

          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <TouchableOpacity activeOpacity={0.8} hitSlop={{top: 15, right: 15, bottom: 15, left: 15}} onPress={()=> navigate('DetailScreen',{
            title:item.title,
          })}>
          <View style={{
              backgroundColor:'green',
              borderRadius: 10,
              height: 450,
              padding: 50,
              marginLeft: 30,
              justifyContent:'flex-end'
             }}>
            <Text style={{fontSize: 30,color:'white'}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
          </TouchableOpacity>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={100}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}