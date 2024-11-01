import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class PositionScreen extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <View style={styles.greenBox}/>
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor: '#28C4D9',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    purpleBox:{
        width:100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right:0,
        // top:0,
    },
    orangeBox:{
        width:100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom:0,
        left:0,
    },
    greenBox:{
        // flex:1,
        // width:100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom:0,
        // right:0,
        ...StyleSheet.absoluteFillObject,
    },
});
