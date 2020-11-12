import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 5,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("어디있을까?")}>
        <Image source={require("../assets/where.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("도시농부 Guide")}>
        <Image source={require("../assets/recipe.png")} />
      </TouchableOpacity>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("다잇다")}>
          <Image source={require("../assets/many.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("공동농업")}>
          <Image source={require("../assets/help.png")} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Shop")}>
        <Image source={require("../assets/shoo.png")} />
      </TouchableOpacity>
    </View>
  );
};
