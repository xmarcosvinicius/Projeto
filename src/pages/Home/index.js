import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import List from '../../components/List';


export default function Home({ navigation }){
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather
                name="user"
                size={24}
                color="black"
                onPress={() => navigation.navigate('Detail')}
                />
            </TouchableOpacity>  
          )
     })
    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                source={require('../../assets/BANNER-NATAL-2.png')}
                style={styles.image}
                />
            </View>
            <View style={styles.searchContainer}>
            <SearchBar style={styles.search}
            placeholder="Type Here..."
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5, width:'100%', marginHorizontal:'1%' }}
            inputContainerStyle={{backgroundColor: 'white'}}
            placeholderTextColor={'#g5g5g5'}
            />
            </View>

            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width:"95%", alignItems:"center",  marginHorizontal: '2%'}}>
                    <List img={require('../../assets/1.jpeg')} cost="R$59,90" onClick={()=> navigation.navigate('Detail') }>
                       Nils Designe
                    </List>
                    <List img={require('../../assets/2.jpeg')} cost="R$5,90" onClick={()=> navigation.navigate('Detail') }>
                    Acarajé da Anna 
                    </List>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around',  width:"95%", alignItems:"center",  marginHorizontal: '2%' }}>
                    <List img={require('../../assets/3.jpeg')} cost="R$150,00" onClick={()=> navigation.navigate('Detail') }>
                       Predeiro
                    </List>
                    <List img={require('../../assets/4.jpeg')} cost="R$30,00" onClick={()=> navigation.navigate('Detail') }>
                    Barbeiro 
                    </List>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',  width:"95%", alignItems:"center",  marginHorizontal: '2%' }}>
                    <List img={require('../../assets/5.jpeg')} cost="R$150,00" onClick={()=> navigation.navigate('Detail') }>
                       Faxina teste teste testettet
                    </List>
                </View>
            </ScrollView>
           
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header:{
       
        marginBottom:8
    },
    image:{
        width:'100%'
    },
    searchContainer:{
        width:"90%",
        alignItems: "center",
        marginHorizontal: '5%',
        marginBottom: 30
       
    }
    
    
})



