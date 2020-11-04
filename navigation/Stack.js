import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Place from "../screens/Place";
import Recipe from "../screens/Recipe";
import Shop from "../screens/Shop";
import Help from "../screens/Help";
import Together from "../screens/Together";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Place" component={Place} />
    <Stack.Screen name="Recipe" component={Recipe} />
    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen name="Together" component={Together} />
    <Stack.Screen name="Shop" component={Shop} />
  </Stack.Navigator>
);
