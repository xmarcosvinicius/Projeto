import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Registration from './pages/Registration'


const Stack = createNativeStackNavigator();

function Routes(){
   
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signin">
                <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
                />
                 <Stack.Screen
                name="Registration"
                component={Registration}
                options={{headerShown: true}}
                />
                <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: true}}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                options={{headerShown: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;