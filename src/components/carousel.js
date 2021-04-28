import React, {useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {navigate} from '../../navigation/rootNavigation';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';

const carouselItems = [
  {
    title: 'Toast with Salmon and Eggs',
  },
  {
    title: 'Beef Burger',
  },
  {
    title: 'Taze Sogan Ekmek',
  },
  {
    title: 'Turşu Suyu',
  },
  {
    title: 'Leblebi',
  },
];

const CarouselScreen = () => {
  const Color = useSelector(x=> x.style.Color)

  const carouselRef = useRef(null);
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
        onPress={() =>
          navigate('DetailScreen', {
            title: item.title,
          })
        }>
        <View style={[styles.CarouselView,Color]}>
         
          <Text style={{fontSize: 30, color: 'white'}}>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={carouselRef}
          data={carouselItems}
          sliderWidth={100}
          itemWidth={300}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    </SafeAreaView>
  );
};
export default CarouselScreen;
const styles = StyleSheet.create({
  CarouselView:{
    height: 450,
    justifyContent:'flex-end',
    borderRadius: 15,
    padding:50,
    marginLeft:7
    
  }
});
