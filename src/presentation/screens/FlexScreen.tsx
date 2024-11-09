import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.box1}/>
      <View style={style.box2}/>
      <View style={style.box3}/>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'gray',
  },
  box1:{
    backgroundColor: '#5856D6',
    flex:1,
  },
  box2:{
    backgroundColor: '#4240a2',
    flex:2,
  },
  box3:{
    backgroundColor: '#2e2d71',
    flex:3,
  },
});
export default FlexScreen;

