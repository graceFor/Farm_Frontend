import React from 'react'
import {View, Text, Button} from "react-native";

export default ({navigation}) => (
<View>
<Text>Home</Text>
    <Button onPress={()=>navigation.navigate("Place")} title="Go to Detail" />
    <Button onPress={()=>navigation.navigate("Recipe")} title="Go to Detail" />
    <Button onPress={()=>navigation.navigate("Shop")} title="Go to Detail" />
    <Button onPress={()=>navigation.navigate("Together")} title="Go to Detail" />
    <Button onPress={()=>navigation.navigate("Help")} title="Go to Detail" />
</View>)