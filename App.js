import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Setting background color to a light gray
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Chandra Gupta</Text>
      <Text>Registration Number: 22MIS1022</Text>
      <Button
        title="Login"
        onPress={() => console.log("Login button pressed")}
      />
      <Button
        title="Portfolio"
        onPress={() => console.log("Portfolio button pressed")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
