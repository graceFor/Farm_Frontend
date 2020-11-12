import React from "react";
import { createStackNavigator, headerTitle } from "@react-navigation/stack";
import Home from "../screens/Home";
import Place from "../screens/Place";
import Recipe from "../screens/Recipe";
import Shop from "../screens/Shop";
import Help from "../screens/Help";
import Together from "../screens/Together";
import { View } from "react-native";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="도시농부" component={Home} />
    <Stack.Screen name="Place" component={Place} />
    <Stack.Screen name="Recipe" component={Recipe} />
    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen name="Together" component={Together} />
    <Stack.Screen name="Shop" component={Shop} />
  </Stack.Navigator>
);
