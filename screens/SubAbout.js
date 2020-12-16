import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { MainStackNavigator } from "../navigation/StackNavigator";

const SubAbout = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Sub about screen</Text>
      <Button     title="Go to Sub Homet Screen"
                    onPress={() => navigation.navigate("SubHome")} 
                    style={styles.center}
                    />

      <Button     title="Go to  Home Screen"
                    onPress={() => navigation.navigate("MainStackNavigator")} 
                    style={styles.center}
                    />

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default SubAbout;