import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import Header from '../../../components/Header';

export default function Signin(){
    const navigation = useNavigation()
    return(
        
        <View style={styles.conatiner}>
                <Header/>
            <View style={styles.form}>
        
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#fff"></TextInput>
                <TextInput style={styles.input} placeholder="Senha"  placeholderTextColor="#fff" secureTextEntry></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.texto}>Entrar</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                    <Text style={styles.link}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    },
    form:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
        width: "90%"

    },
    title:{
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold', 
        marginBottom: 30
    },
    texto:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "700"
    },
    link:{
        color:"#A031BC",
        textDecorationLine: 'underline',
        fontSize:16
    },
    input:{
        borderColor: "#008B8B",
        borderWidth: 1,
        marginBottom: 20, 
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft:20, 
        paddingRight: 20, 
        color: "#fff",
        fontSize: 20, 
        borderRadius: 9, 
        width: "100%"
    },
    button:{
        backgroundColor: "#A031BC",
        padding: 20, 
        borderRadius: 9,
        width:"80%",
        alignItems: "center", 
        marginBottom:15
    }
   
})

