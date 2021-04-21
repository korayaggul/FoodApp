import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

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
            title:"Toast with Salmon and Eggs",

          },
          {
            title:"Toast with Salmon and Eggs",

          },
          {
            title:"Toast with Salmon and Eggs",

          },
          {
            title:"Toast with Salmon and Eggs",

          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'green',
              borderRadius: 10,
              height: 450,
              padding: 50,
              marginLeft: 30,
              justifyContent:'flex-end'
             }}>
            <Text style={{fontSize: 30,}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

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