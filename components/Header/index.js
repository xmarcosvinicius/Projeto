import React from 'react';
import{Image, StyleSheet, View} from 'react-native';

import Logo from '../../assets/logo.png'
function Header(){
   return(
    <View style={styles.conatinerHeader}>
        <Image  source={Logo}/>
    </View>
   )
}
const styles = StyleSheet.create({
    conatinerHeader: {
       padding: 50
    }

})
export default Header