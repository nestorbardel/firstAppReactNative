import {StyleSheet, View} from 'react-native';
import React from 'react';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

///////////////////////////////////////////////////////////////////////////////////////////////
//Foto inicial
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'#28425B',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//     },
// });

///////////////////////////////////////////////////////////////////////////////////////////////
//Foto 10
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#28425B',
//     //TODO: hacer prueba final
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'white',
//   },
//   purpleBox: {
//     backgroundColor: '#5856D6',
//   },
//   orangeBox: {
//     backgroundColor: '#F0A23B',
//     position: 'relative',
//     top:50

//   },
//   blueBox: {
//     backgroundColor: '#28C4D9',
//   },
// });

//Foto 10
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#28425B',
        //TODO: hacer prueba final
    },
    box:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
    },
    purpleBox:{
        backgroundColor:'#5856D6',
        top:100
    },
    orangeBox:{
        backgroundColor:'#F0A23B',
        position:'relative',
        left:100,
    },
    blueBox:{
        backgroundColor:'#28C4D9',
    },
});

// //Foto 8
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#28425B',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//         position:'relative',
//         left:100,
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//     },
// });

// //Foto 7
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#28425B',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//     },
// });

// //Foto 6
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'#28425B',
//         //TODO: hacer prueba final
//     },
//     box:{
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//         flex:1,
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//         flex:1,
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//         flex:2,
//     },
// });

// //Foto 5
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         flexDirection:'row',
//         justifyContent:'space-between',
//         alignItems:'stretch',
//         backgroundColor:'#28425B',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//     },
// });

//Foto tarea 4

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'#28425B',
//         // flexDirection:'row-reverse',
//         alignItems:'center',
//         justifyContent:'space-between',
//         // justifyContent:'space-between',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//         alignSelf:'flex-end',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//         alignSelf:'flex-start',
//     },
// });

//Foto Tarea 3
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'#28425B',
//         alignItems:'center',
//         justifyContent:'center',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//         alignSelf:'flex-end',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//         alignSelf:'flex-start',
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//     },
// });

//Foto 2
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'#28425B',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//         width:'100%',
//     },

// });
//Foto 1
// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor:'#28425B',
//         //TODO: hacer prueba final
//     },
//     box:{
//         width:100,
//         height:100,
//         borderWidth:10,
//         borderColor:'white',
//     },
//     purpleBox:{
//         backgroundColor:'#5856D6',
//     },
//     orangeBox:{
//         backgroundColor:'#F0A23B',
//         flex:1,
//     },
//     blueBox:{
//         backgroundColor:'#28C4D9',
//     },

// });
