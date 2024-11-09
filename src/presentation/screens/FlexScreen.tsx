import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexScreen = () => {
  return (
    <View>
      <View/>
      <View/>
      <View/>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'gray',
  },
});
export default FlexScreen;
