import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';


export default function Detail({ navigation }){
    navigation.setOptions({
        headerTitle: 'Acarajé'
     })
    return(
        
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/2.jpeg')}
                style={styles.image}
                resizeMode="cover"
            />
            <View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 } ]}>Acarajé</Text>
                </View>

                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 16 } ]}>Preparado com um bolinho de feijão-fradinho artesanal, temperado com cebola e sal, frito em azeite de dendê e depois recheado com vatapá (leite de coco, castanha de caju, amendoim e camarão), vinagrete e camarão seco, o acarajé é servido “quente” ou “frio”, ou seja, com muita ou pouca pimenta.</Text>
                </View>

                <View>
                    <Text style={[styles.title, { fontSize: 24 } ]}>R$ 280,90</Text>
                </View>

                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textoBtn}>Tenho interesse</Text>
                    </TouchableOpacity> 
                </View>
               
              
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image:{
        width: '100%'
    },
    title:{
        paddingHorizontal: '3%',
        textAlign:"center",
        marginBottom: 16
    },
    button:{
        backgroundColor: "#A031BC",
        padding: 20, 
        borderRadius: 9,
        width:"80%",
        alignItems: "center",
    },
    textoBtn:{
        color:"#fff"
    }
})


