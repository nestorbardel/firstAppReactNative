import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexDirectionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box ,style.box1]}/>
      <View style={[style.box ,style.box2]}/>
      <View style={[style.box ,style.box3]}/>
      <View style={[style.box ,style.box4]}/>
      <View style={[style.box ,style.box1]}/>
      <View style={[style.box ,style.box2]}/>
      <View style={[style.box ,style.box3]}/>
      <View style={[style.box ,style.box4]}/>
      <View style={[style.box ,style.box1]}/>
      <View style={[style.box ,style.box2]}/>
      <View style={[style.box ,style.box3]}/>
      <View style={[style.box ,style.box4]}/>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'stretch',
    flexDirection:'row',
    flexWrap:'wrap',
    gap:10,
  },
  box:{
    width:100,
    height: 100,
  },
  box1:{
    backgroundColor: '#5856D6',
    // top:-100,
  },
  box2:{
    backgroundColor: '#4240a2',
    // alignSelf:'flex-end',
  },
  box3:{
    backgroundColor: '#2e2d71',
    // alignSelf:'center',
    // top:100,
  },
  box4:{
    backgroundColor: '#2b2a8d',
    // top:100,
  },
});
export default FlexDirectionScreen;

