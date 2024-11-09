import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexDirectionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box ,style.box1]}/>
      <View style={[style.box ,style.box2]}/>
      <View style={[style.box ,style.box3]}/>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  box:{
    width:100,
    height: 100,
  },
  box1:{
    backgroundColor: '#5856D6',
    top:-100,
  },
  box2:{
    backgroundColor: '#4240a2',
  },
  box3:{
    backgroundColor: '#2e2d71',
    top:100,
  },
});
export default FlexDirectionScreen;

