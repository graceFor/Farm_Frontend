import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("Place")} title="Go to Place" />
      <Button onPress={() => navigation.navigate("Recipe")} title="Go to Recipe" />
      <Button onPress={() => navigation.navigate("Shop")} title="Go to Shop" />
      <Button onPress={() => navigation.navigate("Together")} title="Go to Together" />
      <Button onPress={() => navigation.navigate("Help")} title="Go to Help" />
    </View>
  );
};
