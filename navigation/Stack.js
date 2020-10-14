import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from '../screens/Home';
import Place from '../screens/Place';
import Recipe from '../screens/Recipe';

const Stack = createStackNavigator();

export default ( )=> {
    <Stack.Navigator>
        <Stack.Screen name ="Home" component={Home} />
        <Stack.Screen name = "Place" component={Place} />
        <Stack.Screen name = "Recipe" component={Recipe} />
    </Stack.Navigator>
}