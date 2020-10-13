import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Home from '../screens/Home'
import Place from '../screens/Place'

const Stack = createStackNavigator();

export default ( )=> {
    <Stack.Navigator>
        <Stack.Screen name ="Home" component={Home} />
        <Stack.Screen name = "Place" component={Place} />
    </Stack.Navigator>
}