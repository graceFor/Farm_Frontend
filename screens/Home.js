import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Place")}>
        <Image source={require("../assets/where.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Place")}>
        <Image source={require("../assets/where.png")} />
      </TouchableOpacity>
    </View>
  );
};
