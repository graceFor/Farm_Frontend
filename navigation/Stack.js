import React from "react";
import { createStackNavigator, headerTitle } from "@react-navigation/stack";
import Home from "../screens/Home";
import Place from "../screens/Place";
import Recipe from "../screens/Recipe";
import Shop from "../screens/Shop";
import Many from "../screens/Many";
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
    <Stack.Screen name="어디있을까?" component={Place} />
    <Stack.Screen name="도시농부 Guide" component={Recipe} />
    <Stack.Screen name="다잇다" component={Many} />
    <Stack.Screen name="공동농업" component={Together} />
    <Stack.Screen name="Shop" component={Shop} />
  </Stack.Navigator>
);
