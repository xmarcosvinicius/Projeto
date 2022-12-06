import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function List(props) {

 function filterDesc(desc){
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 15)}...`;
 }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.listImg}
      />
      <Text style={styles.listText}>
          {filterDesc(props.children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.listText}> {props.cost} </Text>
      </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 20, 
        backgroundColor: "#fff",
        shadowColor:'#52006A',
        width:175,
        height: 190,
        marginBottom:10,
        marginTop:10
    },
    listImg:{
        width: 120,
        height: 120
    },
    listText:{
        fontSize: 16,
    }
});